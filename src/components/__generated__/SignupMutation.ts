/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignupMutation
// ====================================================

export interface SignupMutation_signup {
  __typename: "AuthPayload";
  token: string | null;
}

export interface SignupMutation {
  signup: SignupMutation_signup | null;
}

export interface SignupMutationVariables {
  email: string;
  password: string;
  name: string;
}
