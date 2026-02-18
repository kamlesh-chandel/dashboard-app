import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'yui6o9rb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token:
    'skSzpeEe6L3suJsfOxv4LSVJJV4q4dumYJfxQRZdDEc1IEe7Vd2WHxK9279wKlMKgx1fqyv7MCb5jfLEhL70GvFyA7oFw7AdkPpj9EyrZGpFGb5ldKN1QG0oIoPl9hx8SQi5VqIrHOaPgxp84RLstOSVmbeZk0KQbELO66rqu4lt5ZcN18i5',
  useCdn: false,
});
