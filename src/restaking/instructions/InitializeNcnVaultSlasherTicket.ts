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
 * @category InitializeNcnVaultSlasherTicket
 * @category generated
 */
export type InitializeNcnVaultSlasherTicketInstructionArgs = {
  args: beet.bignum;
};
/**
 * @category Instructions
 * @category InitializeNcnVaultSlasherTicket
 * @category generated
 */
export const InitializeNcnVaultSlasherTicketStruct = new beet.BeetArgsStruct<
  InitializeNcnVaultSlasherTicketInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ["instructionDiscriminator", beet.u8],
    ["args", beet.u64],
  ],
  "InitializeNcnVaultSlasherTicketInstructionArgs",
);
/**
 * Accounts required by the _InitializeNcnVaultSlasherTicket_ instruction
 *
 * @property [] config
 * @property [_writable_] ncn
 * @property [] vault
 * @property [] slasher
 * @property [] ncnVaultTicket
 * @property [_writable_] ncnVaultSlasherTicket
 * @property [**signer**] admin
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category InitializeNcnVaultSlasherTicket
 * @category generated
 */
export type InitializeNcnVaultSlasherTicketInstructionAccounts = {
  config: web3.PublicKey;
  ncn: web3.PublicKey;
  vault: web3.PublicKey;
  slasher: web3.PublicKey;
  ncnVaultTicket: web3.PublicKey;
  ncnVaultSlasherTicket: web3.PublicKey;
  admin: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const initializeNcnVaultSlasherTicketInstructionDiscriminator = 3;

/**
 * Creates a _InitializeNcnVaultSlasherTicket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializeNcnVaultSlasherTicket
 * @category generated
 */
export function createInitializeNcnVaultSlasherTicketInstruction(
  accounts: InitializeNcnVaultSlasherTicketInstructionAccounts,
  args: InitializeNcnVaultSlasherTicketInstructionArgs,
  programId = new web3.PublicKey("RestkWeAVL8fRGgzhfeoqFhsqKRchg6aa1XrcH96z4Q"),
) {
  const [data] = InitializeNcnVaultSlasherTicketStruct.serialize({
    instructionDiscriminator:
      initializeNcnVaultSlasherTicketInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ncn,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.slasher,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ncnVaultTicket,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ncnVaultSlasherTicket,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.admin,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
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
