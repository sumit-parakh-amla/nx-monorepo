/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { BuildResult } from '@angular-devkit/build-webpack';
import { Observable } from 'rxjs';
import { BuildBuilderOptions } from '../../utils/types';
import { runNodePackageBuilder } from './node/package/package.impl';
import { runPackageBuilder } from './web/package/package.impl';

try {
  require('dotenv').config();
} catch (e) {
  console.log('.env not found. Skipping it..');
}

export interface BuildNodeBuilderOptions extends BuildBuilderOptions {
  optimization?: boolean;
  sourceMap?: boolean;
  externalDependencies: 'all' | 'none' | string[];
  buildLibsFromSource?: boolean;
}

export type NodeBuildEvent = BuildResult & {
  outfile: string;
};

export function run(
  options: JsonObject & BuildNodeBuilderOptions,
  context: BuilderContext
): Observable<NodeBuildEvent> {
  if (options.buildType === 'node') {
    return runNodePackageBuilder(options as any, context) as any;
  }

  if (options.buildType === 'package') {
    return runPackageBuilder(options as any, context) as any;
  }
}

export default createBuilder(run);
