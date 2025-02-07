/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";

/**
 * @category Instructions
 * @category InitializeConfig
 * @category generated
 */
export const InitializeConfigStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([["instructionDiscriminator", beet.u8]], "InitializeConfigInstructionArgs");
/**
 * Accounts required by the _InitializeConfig_ instruction
 *
 * @property [_writable_] config
 * @property [_writable_, **signer**] admin
 * @property [] vaultProgram
 * @category Instructions
 * @category InitializeConfig
 * @category generated
 */
export type InitializeConfigInstructionAccounts = {
  config: web3.PublicKey;
  admin: web3.PublicKey;
  vaultProgram: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const initializeConfigInstructionDiscriminator = 0;

/**
 * Creates a _InitializeConfig_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitializeConfig
 * @category generated
 */
export function createInitializeConfigInstruction(
  accounts: InitializeConfigInstructionAccounts,
  programId = new web3.PublicKey("RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q"),
) {
  const [data] = InitializeConfigStruct.serialize({
    instructionDiscriminator: initializeConfigInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.admin,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.vaultProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
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
