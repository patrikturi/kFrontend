#!/usr/bin/env python3
import argparse
import os
import sys

from helpers.dropbox import DropboxWrapper
from helpers.translation_helpers import check_file, fill_empty_values

LOCAL_PATH = './public/locales'
DROPBOX_PATH = '/locales'


def for_each_file(src_dir_path, dest_dir_path, func):

  final_ret_val = 0
  for root, dir, files in os.walk(src_dir_path):
    for file_name in files:
      src_file_path = os.path.join(root, file_name)
      dest_file_path = src_file_path.replace(src_dir_path, dest_dir_path)
      ret_val = func(src_file_path, dest_file_path)
      if ret_val:
        final_ret_val = ret_val

  return final_ret_val


def download(args):
  with DropboxWrapper() as dbx:
    dbx.download_tree('./public', DROPBOX_PATH)

def upload(args):
  if not args.dest_path:
    raise ValueError('Argument --dest-path was not specified on the command line')
  if not args.dest_path.startswith('/'):
    raise ValueError('--dest-path must start with / because it is a Dropbox path')

  with DropboxWrapper() as dbx:
    for_each_file(LOCAL_PATH, args.dest_path, dbx.upload_file)

def normalize(args):
  for_each_file(LOCAL_PATH, LOCAL_PATH, fill_empty_values)

def verify(args):
  ret_val = for_each_file(LOCAL_PATH, LOCAL_PATH, check_file)
  sys.exit(ret_val)


if __name__ == '__main__':
  ACTIONS = {
    'download': download,
    'upload': upload,
    'normalize': normalize,
    'verify': verify
  }

  parser = argparse.ArgumentParser()
  parser.add_argument('action', choices=ACTIONS.keys())
  parser.add_argument('--dest-path')
  args = parser.parse_args()

  ACTIONS[args.action](args)
