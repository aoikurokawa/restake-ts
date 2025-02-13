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
 * @category SetProgramFeeWallet
 * @category generated
 */
export const SetProgramFeeWalletStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>(
  [["instructionDiscriminator", beet.u8]],
  "SetProgramFeeWalletInstructionArgs",
);
/**
 * Accounts required by the _SetProgramFeeWallet_ instruction
 *
 * @property [_writable_] config
 * @property [**signer**] programFeeAdmin
 * @property [] newFeeWallet
 * @category Instructions
 * @category SetProgramFeeWallet
 * @category generated
 */
export type SetProgramFeeWalletInstructionAccounts = {
  config: web3.PublicKey;
  programFeeAdmin: web3.PublicKey;
  newFeeWallet: web3.PublicKey;
};

export const setProgramFeeWalletInstructionDiscriminator = 18;

/**
 * Creates a _SetProgramFeeWallet_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category SetProgramFeeWallet
 * @category generated
 */
export function createSetProgramFeeWalletInstruction(
  accounts: SetProgramFeeWalletInstructionAccounts,
  programId = new web3.PublicKey("Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8"),
) {
  const [data] = SetProgramFeeWalletStruct.serialize({
    instructionDiscriminator: setProgramFeeWalletInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.programFeeAdmin,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.newFeeWallet,
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
