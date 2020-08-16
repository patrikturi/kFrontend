#!/usr/bin/env python3
import re

import argparse


if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('file_path')
  args = parser.parse_args()

  file_path = args.file_path

  with open(file_path, 'r') as file:

    def map_line(line):
      # eg.:   "Getting Started": ""
      match = re.match(r'\s*\"(.*)\": \"\"', line)

      return line.replace('""', f'"{match.group(1)}"') if match else line

    out_lines = list(map(map_line, file.readlines()))

  with open(file_path, 'w') as file:
    file.write(''.join(out_lines))
