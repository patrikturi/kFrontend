#!/usr/bin/env python3
import os

import dropbox

ACCESS_TOKEN = os.environ['DROPBOX_ACCESS_TOKEN']


scope = ['files.content.write']

def upload_tree(dbx, src_dir_path, dest_dir_path):
  for root, dir, files in os.walk(src_dir_path):
    for file_name in files:
      file_path = os.path.join(root, file_name)
      upload_file(dbx, file_path, file_path.replace(src_dir_path, dest_dir_path))

def upload_file(dbx, src_file_path, dest_file_path):
  print(f'Uploading {src_file_path}...')
  with open(src_file_path, mode='rb') as src_file:
    data = src_file.read()
    
    # TODO: use update mode with rev
    #write_mode = dropbox.files.WriteMode.update('9836c282f2c5a90a6ea75e3b2461cdc03c781e046f4da76cbed09b4ee7f93aa5')
    # files_list_revisions?
    write_mode = dropbox.files.WriteMode.overwrite
    dbx.files_upload(data, dest_file_path, mode=write_mode)


with dropbox.Dropbox(ACCESS_TOKEN, scope=scope) as dbx:

  upload_tree(dbx, './public/locales', '/locales')
