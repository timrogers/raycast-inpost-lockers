/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `find-lockers` command */
  export type FindLockers = ExtensionPreferences & {}
  /** Preferences accessible in the `favourite-lockers` command */
  export type FavouriteLockers = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `find-lockers` command */
  export type FindLockers = {}
  /** Arguments passed to the `favourite-lockers` command */
  export type FavouriteLockers = {}
}


declare module "swift:*" {
  function run<T = unknown, U = any>(command: string, input?: U): Promise<T>;
  export default run;
	export class SwiftError extends Error {
    stderr: string;
    stdout: string;
  }
}
