#!/usr/bin/env python3
import os

import dropbox

ACCESS_TOKEN = os.environ['DROPBOX_ACCESS_TOKEN']


def download_tree(dbx, dest_folder_path, src_folder_path):

    for entry in dbx.files_list_folder(src_folder_path).entries:
        print(entry)
        if isinstance(entry, dropbox.files.FileMetadata):
            download_file(dbx, dest_folder_path, entry.path_lower)
        elif isinstance(entry, dropbox.files.FolderMetadata):
            download_tree(dbx, dest_folder_path, entry.path_lower)
        else:
            raise Exception(f'Unkown entry type: {entry}')


def download_file(dbx, dest_folder_path, src_file_path):
    print(f'Downloading {src_file_path}...')
    dest_file_path = os.path.join(dest_folder_path, src_file_path[1:])
    dest_dir_path = os.path.abspath(os.path.dirname(dest_file_path))

    os.makedirs(dest_dir_path, exist_ok=True)

    dbx.files_download_to_file(dest_file_path, src_file_path)


scope = ['files.content.read']

with dropbox.Dropbox(ACCESS_TOKEN, scope=scope) as dbx:

    download_tree(dbx, './public', '/locales')

