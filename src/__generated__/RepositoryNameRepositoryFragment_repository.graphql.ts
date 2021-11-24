/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type RepositoryNameRepositoryFragment_repository = {
    readonly name: string;
    readonly createdAt: unknown;
    readonly " $refType": "RepositoryNameRepositoryFragment_repository";
};
export type RepositoryNameRepositoryFragment_repository$data = RepositoryNameRepositoryFragment_repository;
export type RepositoryNameRepositoryFragment_repository$key = {
    readonly " $data"?: RepositoryNameRepositoryFragment_repository$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"RepositoryNameRepositoryFragment_repository">;
};



const node: ReaderFragment = {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryNameRepositoryFragment_repository",
    "selections": [
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
        },
        {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "createdAt",
            "storageKey": null
        }
    ],
    "type": "Repository",
    "abstractKey": null
} as any;
(node as any).hash = 'b1722599e53e39e2f97addb60a40bf2f';
export default node;
