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
 * @category InitializeVaultNcnSlasherOperatorTicket
 * @category generated
 */
export const InitializeVaultNcnSlasherOperatorTicketStruct =
  new beet.BeetArgsStruct<{ instructionDiscriminator: number }>(
    [["instructionDiscriminator", beet.u8]],
    "InitializeVaultNcnSlasherOperatorTicketInstructionArgs",
  );
/**
 * Accounts required by the _InitializeVaultNcnSlasherOperatorTicket_ instruction
 *
 * @property [] config
 * @property [] vault
 * @property [] ncn
 * @property [] slasher
 * @property [] operator
 * @property [] vaultNcnSlasherTicket
 * @property [_writable_] vaultNcnSlasherOperatorTicket
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category InitializeVaultNcnSlasherOperatorTicket
 * @category generated
 */
export type InitializeVaultNcnSlasherOperatorTicketInstructionAccounts = {
  config: web3.PublicKey;
  vault: web3.PublicKey;
  ncn: web3.PublicKey;
  slasher: web3.PublicKey;
  operator: web3.PublicKey;
  vaultNcnSlasherTicket: web3.PublicKey;
  vaultNcnSlasherOperatorTicket: web3.PublicKey;
  payer: web3.PublicKey;
  systemProgram?: web3.PublicKey;
};

export const initializeVaultNcnSlasherOperatorTicketInstructionDiscriminator = 5;

/**
 * Creates a _InitializeVaultNcnSlasherOperatorTicket_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category InitializeVaultNcnSlasherOperatorTicket
 * @category generated
 */
export function createInitializeVaultNcnSlasherOperatorTicketInstruction(
  accounts: InitializeVaultNcnSlasherOperatorTicketInstructionAccounts,
  programId = new web3.PublicKey("Vau1t6sLNxnzB7ZDsef8TLbPLfyZMYXH8WTNqUdm9g8"),
) {
  const [data] = InitializeVaultNcnSlasherOperatorTicketStruct.serialize({
    instructionDiscriminator:
      initializeVaultNcnSlasherOperatorTicketInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.config,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.ncn,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.slasher,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.operator,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vaultNcnSlasherTicket,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.vaultNcnSlasherOperatorTicket,
      isWritable: true,
      isSigner: false,
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
