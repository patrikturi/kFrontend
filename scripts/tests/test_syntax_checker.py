import unittest

from scripts.syntax_check_translations import check_file


class TranslationSyntaxCheckerTestCase(unittest.TestCase):

  def test_with_valid_content(self):
    valid_content = \
"""
{
  "Register now!": "Registrar agora!",
  "orLoginIfAlreadyRegistered2": "ou <1> Faça login </1> se você já tiver uma conta",
  "Home": "Pagina inicial",
  "Getting Started": "Começando"
}
"""
    errors = check_file(valid_content)

    self.assertEqual(0, len(errors))

  def test_with_empty_element(self):
    valid_content = '{"a": "hello <1></1> empty"}'

    errors = check_file(valid_content)

    self.assertEqual(0, len(errors))

  def test_with_extra_space(self):
    valid_content = '{"a": "  hello <1>empty</1> spaces "}'

    errors = check_file(valid_content)

    self.assertEqual(0, len(errors))

  def test_with_complex_xml_value(self):
    valid_content = \
      '{ "key1": "hello <1>there</1><2>this<3>is a<4></4>complex</3> xml</2> for sure" }'

    errors = check_file(valid_content)

    self.assertEqual(0, len(errors))

  def test_with_invalid_json(self):
    invalid_content = \
"""
{
  "a": "one",
  "b": invalidvalue
}
"""
    errors = check_file(invalid_content)

    self.assertEqual(1, len(errors))
    self.assertTrue("not a valid JSON" in errors[0])

  def test_with_non_json_value(self):
    invalid_content = \
"""
{
  "a": "one",
  "b": { "c": "two" }
}
"""
    errors = check_file(invalid_content)

    self.assertEqual(1, len(errors))
    self.assertTrue("not a string" in errors[0])

  def test_with_broken_xml_value(self):
    invalid_content = \
"""
{
  "a": "one",
  "b": "<1>this is not closed"
}
"""
    errors = check_file(invalid_content)

    self.assertEqual(1, len(errors), errors)
    print(errors[0])
    self.assertTrue("not a valid XML" in errors[0], errors[0])

  def test_with_space_between_tags(self):
    invalid_content = '{"a": "hello <1> </1> there"}'

    errors = check_file(invalid_content)
    # i18next does not accept "<1> </1>" but only "<1></1>"
    self.assertEqual(1, len(errors))

  def test_with_space_between_different_tags(self):
    valid_content = '{"a": "<1></1> <3>a </3>"}'

    errors = check_file(valid_content)

    self.assertEqual(0, len(errors))
