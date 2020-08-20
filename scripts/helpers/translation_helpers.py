import json
import re
from xml.etree import ElementTree as ET


def fill_empty_values(src_file_path, dest_file_path):
  print(f'Filling empty values in {src_file_path}')
  with open(src_file_path, 'r') as file:

    def map_line(line):
      # eg.:   "Getting Started": ""
      match = re.match(r'\s*\"(.*)\": \"\"', line)

      return line.replace('""', f'"{match.group(1)}"') if match else line

    out_lines = list(map(map_line, file.readlines()))

  with open(dest_file_path, 'w') as file:
    file.write(''.join(out_lines))


def check_file_contents(file_content):
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


def check_file(file_path, _):
  ret_val = 0
  print(f'\nChecking {file_path}...')

  with open(file_path, 'r') as file:
    errors = check_file_contents(file.read())
    for error in errors:
      print(f'  ERROR: {error}')
      ret_val = -1
  return ret_val
