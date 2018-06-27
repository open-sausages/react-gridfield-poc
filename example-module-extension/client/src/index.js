import Injector, { injectGraphql } from 'lib/Injector';
Injector.transform(
  'noteslist-query-extension',
  (updater) => {

  },
  { after: ['noteslist-graphql', 'notesaddform-graphql'] }
);