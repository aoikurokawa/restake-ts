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
 * @category InitializeVaultNcnTicket
 * @category generated
 */
export const InitializeVaultNcnTicketStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>(
  [["instructionDiscriminator", beet.u8]],
  "InitializeVaultNcnTicketInstructionArgs",
);
/**
 * Accounts required by the _InitializeVaultNcnTicket_ instruction
 *
 * @property [] config
 * @property [_writable_] vault
 * @property [] ncn
 * @property [] ncnVaultTicket
 * @property [_writable_] vaultNcnTicket
 * @property [**signer**] admin
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category InitializeVaultNcnTicket
 * @category generated
 */
export type InitializeVaultNcnTicketInstructionAccounts = {
  config: web3.PublicKey;
  vault: web3.PublicKey;
  ncn: web3.PublicKey;
  ncnVaultTicket: web3.PublicKey;
  vaultNcnTicket: web3.PublicKey;
  admin: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const initializeVaultNcnTicketInstructionDiscriminator = 4;

/**
 * Creates a _InitializeVaultNcnTicket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitializeVaultNcnTicket
 * @category generated
 */
export function createInitializeVaultNcnTicketInstruction(
  accounts: InitializeVaultNcnTicketInstructionAccounts,
  programId = new web3.PublicKey("Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8"),
) {
  const [data] = InitializeVaultNcnTicketStruct.serialize({
    instructionDiscriminator: initializeVaultNcnTicketInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.ncn,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ncnVaultTicket,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vaultNcnTicket,
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
