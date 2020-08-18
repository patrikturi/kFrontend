import json
import os
import re
import sys
from xml.etree import ElementTree as ET


def check_file(file_content):
  errors = []
  try:
    data = json.loads(file_content)
  except json.decoder.JSONDecodeError as ex:
    errors.append(f'File is not a valid JSON. Message: "{ex}"')
    return errors

  for key, value in data.items():
    if not isinstance(value, str):
      errors.append(f'Value is not a string: "{value}"')
      return errors

    # XML tags can not begin with a number
    def replace_tag(match):
      tag = match.group(1)
      if '/' in tag: # eg. </1> -> </a1>
        return tag[:2] + 'a' + tag[2:]
      # eg. <1> -> <a1>
      return tag[0] + 'a' + tag[1:]

    value_xml = f'<wrapper>{value}</wrapper>'
    # eg. <1> or </1>
    value_xml = re.sub(r'(<\/?\d+>)', replace_tag, value_xml)
    try:
      ET.fromstring(value_xml)
    except ET.ParseError as ex:
      errors.append(f'Value is not a valid XML: "{value}". Message: "{ex}""')
      return errors

    # eg. <1></1> is valid but <1> </1> is invalid
    invalid_match = re.match(r'.*<\d+>\s+<\/\d+>', value)
    if invalid_match:
        errors.append(f'No spaces allowed between XML elements. Value: "{value}"')
        return errors

  return errors


if __name__ == '__main__':
  success = True
  for root, dir, files in os.walk('./public/locales'):
    for file_name in files:
      file_path = os.path.join(root, file_name)
      print(f'\nChecking {file_path}...')

      with open(file_path, 'r') as file:
        errors = check_file(file.read())
        for error in errors:
          print(f'  ERROR: {error}')
          success = False
  if not success:
    sys.exit(-1)
