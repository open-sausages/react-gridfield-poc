import Injector from 'lib/Injector';
import SortingComponent from './components/SortingComponent';
import Config from 'lib/Config';

Injector.component.register('SortingComponent', SortingComponent);
// setTimeout is a super hack. Config isn't ready on load. Config.ready(), maybe?
setTimeout(() => {
  Config.get('gridFieldQueries').forEach(gridFieldQuery => {
    const {name} = gridFieldQuery;
    Injector.transform(
      `graphql-sorter-${name}`,
      (updater) => {
        updater.query(`${name}Query.SortingComponent`, (manager) => {
          manager.addParam('sortBy', `[Read${manager.config.pluralName}SortInputType]`);
        });
      }
    );
  });
}, 1);