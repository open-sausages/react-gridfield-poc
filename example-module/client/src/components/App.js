import React from 'react';
import { inject } from 'lib/Injector';
import FormBuilderLoader from 'containers/FormBuilderLoader/FormBuilderLoader';

const App = () => (
  <div>
    <FormBuilderLoader identifier="Test.Module" schemaUrl="admin/test-module/MyApp-TestModule-Note/schema" />
  </div>
);

export default App;