import os

import dropbox


class DropboxWrapper(dropbox.Dropbox):

  def __init__(self):
    access_token = os.environ['DROPBOX_ACCESS_TOKEN']
    scope = ['files.content.read', 'files.content.write']
    super().__init__(access_token, scope=scope)

  def upload_file(self, src_file_path, dest_file_path):
    print(f'Uploading {src_file_path}...')
    with open(src_file_path, mode='rb') as src_file:
      data = src_file.read()

      # TODO: use update mode with rev
      #write_mode = dropbox.files.WriteMode.update('9836c282f2c5a90a6ea75e3b2461cdc03c781e046f4da76cbed09b4ee7f93aa5')
      # files_list_revisions?
      write_mode = dropbox.files.WriteMode.overwrite
      self.files_upload(data, dest_file_path, mode=write_mode)

  def download_tree(self, dest_folder_path, src_folder_path):

      for entry in self.files_list_folder(src_folder_path).entries:
          if isinstance(entry, dropbox.files.FileMetadata):
              self.download_file(dest_folder_path, entry.path_lower)
          elif isinstance(entry, dropbox.files.FolderMetadata):
              self.download_tree(dest_folder_path, entry.path_lower)
          else:
              raise Exception(f'Unkown entry type: {entry}')

  def download_file(self, dest_folder_path, src_file_path):
      print(f'Downloading {src_file_path}...')
      dest_file_path = os.path.join(dest_folder_path, src_file_path[1:])
      dest_dir_path = os.path.abspath(os.path.dirname(dest_file_path))

      os.makedirs(dest_dir_path, exist_ok=True)

      self.files_download_to_file(dest_file_path, src_file_path)
