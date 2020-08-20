import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { CliSchematicSchema } from './schema';

describe('cli schematic', () => {
  let appTree: Tree;
  const options: CliSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@artifi/cli',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('cli', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
