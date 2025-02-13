/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";
import {
  OperatorAdminRole,
  operatorAdminRoleBeet,
} from "../types/OperatorAdminRole";

/**
 * @category Instructions
 * @category OperatorSetSecondaryAdmin
 * @category generated
 */
export type OperatorSetSecondaryAdminInstructionArgs = {
  operatorAdminRole: OperatorAdminRole;
};
/**
 * @category Instructions
 * @category OperatorSetSecondaryAdmin
 * @category generated
 */
export const OperatorSetSecondaryAdminStruct = new beet.BeetArgsStruct<
  OperatorSetSecondaryAdminInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ["instructionDiscriminator", beet.u8],
    ["operatorAdminRole", operatorAdminRoleBeet],
  ],
  "OperatorSetSecondaryAdminInstructionArgs",
);
/**
 * Accounts required by the _OperatorSetSecondaryAdmin_ instruction
 *
 * @property [_writable_] operator
 * @property [**signer**] admin
 * @property [] newAdmin
 * @category Instructions
 * @category OperatorSetSecondaryAdmin
 * @category generated
 */
export type OperatorSetSecondaryAdminInstructionAccounts = {
  operator: web3.PublicKey;
  admin: web3.PublicKey;
  newAdmin: web3.PublicKey;
};

export const operatorSetSecondaryAdminInstructionDiscriminator = 20;

/**
 * Creates a _OperatorSetSecondaryAdmin_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category OperatorSetSecondaryAdmin
 * @category generated
 */
export function createOperatorSetSecondaryAdminInstruction(
  accounts: OperatorSetSecondaryAdminInstructionAccounts,
  args: OperatorSetSecondaryAdminInstructionArgs,
  programId = new web3.PublicKey("RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q"),
) {
  const [data] = OperatorSetSecondaryAdminStruct.serialize({
    instructionDiscriminator: operatorSetSecondaryAdminInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.operator,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.admin,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.newAdmin,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
