import { BigInt } from "@graphprotocol/graph-ts"
import {
  AavegotchiDiamond,
  ClaimAavegotchi,
  LockAavegotchi,
  SetAavegotchiName,
  SetBatchId,
  SpendSkillpoints,
  UnLockAavegotchi,
  AddedAavegotchiBatch,
  AddedItemsBatch,
  WithdrawnBatch,
  WithdrawnItems,
  DecreaseStake,
  ExperienceTransfer,
  IncreaseStake,
  AddCollateralType,
  AddItemType,
  AddWearableSet,
  CreateHaunt,
  DaoTransferred,
  DaoTreasuryTransferred,
  GameManagerTransferred,
  GrantExperience,
  ItemTypeMaxQuantity,
  UpdateCollateralModifiers,
  UpdateWearableSet,
  ChangedListingFee,
  ERC1155ExecutedListing,
  ERC1155ListingAdd,
  ERC1155ListingCancelled,
  ERC721ExecutedListing,
  ERC721ListingAdd,
  EquipWearables,
  TransferToParent,
  UseConsumables,
  MetaTransactionExecuted,
  BuyPortals,
  PurchaseItemsWithGhst,
  PurchaseItemsWithVouchers,
  PurchaseTransferItemsWithGhst,
  OpenPortals,
  PortalOpened,
  VrfRandomNumber,
  MigrateVouchers,
  PurchaseItemsWithGhst1,
  PurchaseItemsWithVouchers1,
  PurchaseTransferItemsWithGhst1,
  Xingyun,
  AavegotchiInteract,
  ERC1155ListingCancelled1,
  ERC1155ListingRemoved,
  UpdateERC1155Listing,
  ERC721ListingCancelled,
  ERC721ListingRemoved,
  StoreSvg,
  UpdateSvg,
  DiamondCut,
  OwnershipTransferred,
  ApprovalForAll,
  TransferBatch,
  TransferFromParent,
  TransferSingle,
  TransferToParent1,
  URI,
  Approval,
  ApprovalForAll1,
  Transfer
} from "../generated/AavegotchiDiamond/AavegotchiDiamond"
import { AirdropReceiver } from "../generated/schema"
import { getOrCreateAirdrop } from "./helper"

export function handleClaimAavegotchi(event: ClaimAavegotchi): void {
  
}

export function handleLockAavegotchi(event: LockAavegotchi): void {}

export function handleSetAavegotchiName(event: SetAavegotchiName): void {}

export function handleSetBatchId(event: SetBatchId): void {}

export function handleSpendSkillpoints(event: SpendSkillpoints): void {}

export function handleUnLockAavegotchi(event: UnLockAavegotchi): void {}

export function handleAddedAavegotchiBatch(event: AddedAavegotchiBatch): void {}

export function handleAddedItemsBatch(event: AddedItemsBatch): void {}

export function handleWithdrawnBatch(event: WithdrawnBatch): void {}

export function handleWithdrawnItems(event: WithdrawnItems): void {}

export function handleDecreaseStake(event: DecreaseStake): void {}

export function handleExperienceTransfer(event: ExperienceTransfer): void {}

export function handleIncreaseStake(event: IncreaseStake): void {}

export function handleAddCollateralType(event: AddCollateralType): void {}

export function handleAddItemType(event: AddItemType): void {}

export function handleAddWearableSet(event: AddWearableSet): void {}

export function handleCreateHaunt(event: CreateHaunt): void {}

export function handleDaoTransferred(event: DaoTransferred): void {}

export function handleDaoTreasuryTransferred(
  event: DaoTreasuryTransferred
): void {}

export function handleGameManagerTransferred(
  event: GameManagerTransferred
): void {}

export function handleGrantExperience(event: GrantExperience): void {
    let blockNumber = event.block.number;
    let airdrop = getOrCreateAirdrop(blockNumber);
    let receivers: BigInt[] = event.params._tokenIds;
    let amounts: BigInt[] = event.params._xpValues;

    for(let i=0; i < receivers.length; i++) {
      let gotchi = receivers[i];
      let amount = amounts[i];

      let ar = new AirdropReceiver(blockNumber.toString()+"-"+gotchi.toString())
      ar.gotchi = gotchi;
      ar.amount = amount;
      ar.airdrop = blockNumber.toString();
      ar.timestamp = event.block.timestamp;
      ar.save();
    }
}

export function handleItemTypeMaxQuantity(event: ItemTypeMaxQuantity): void {}

export function handleUpdateCollateralModifiers(
  event: UpdateCollateralModifiers
): void {}

export function handleUpdateWearableSet(event: UpdateWearableSet): void {}

export function handleChangedListingFee(event: ChangedListingFee): void {}

export function handleERC1155ExecutedListing(
  event: ERC1155ExecutedListing
): void {}

export function handleERC1155ListingAdd(event: ERC1155ListingAdd): void {}

export function handleERC1155ListingCancelled(
  event: ERC1155ListingCancelled
): void {}

export function handleERC721ExecutedListing(
  event: ERC721ExecutedListing
): void {}

export function handleERC721ListingAdd(event: ERC721ListingAdd): void {}

export function handleEquipWearables(event: EquipWearables): void {}

export function handleTransferToParent(event: TransferToParent): void {}

export function handleUseConsumables(event: UseConsumables): void {}

export function handleMetaTransactionExecuted(
  event: MetaTransactionExecuted
): void {}

export function handleBuyPortals(event: BuyPortals): void {}

export function handlePurchaseItemsWithGhst(
  event: PurchaseItemsWithGhst
): void {}

export function handlePurchaseItemsWithVouchers(
  event: PurchaseItemsWithVouchers
): void {}

export function handlePurchaseTransferItemsWithGhst(
  event: PurchaseTransferItemsWithGhst
): void {}

export function handleOpenPortals(event: OpenPortals): void {}

export function handlePortalOpened(event: PortalOpened): void {}

export function handleVrfRandomNumber(event: VrfRandomNumber): void {}

export function handleMigrateVouchers(event: MigrateVouchers): void {}

export function handlePurchaseItemsWithGhst1(
  event: PurchaseItemsWithGhst1
): void {}

export function handlePurchaseItemsWithVouchers1(
  event: PurchaseItemsWithVouchers1
): void {}

export function handlePurchaseTransferItemsWithGhst1(
  event: PurchaseTransferItemsWithGhst1
): void {}

export function handleXingyun(event: Xingyun): void {}

export function handleAavegotchiInteract(event: AavegotchiInteract): void {}

export function handleERC1155ListingCancelled1(
  event: ERC1155ListingCancelled1
): void {}

export function handleERC1155ListingRemoved(
  event: ERC1155ListingRemoved
): void {}

export function handleUpdateERC1155Listing(event: UpdateERC1155Listing): void {}

export function handleERC721ListingCancelled(
  event: ERC721ListingCancelled
): void {}

export function handleERC721ListingRemoved(event: ERC721ListingRemoved): void {}

export function handleStoreSvg(event: StoreSvg): void {}

export function handleUpdateSvg(event: UpdateSvg): void {}

export function handleDiamondCut(event: DiamondCut): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferFromParent(event: TransferFromParent): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleTransferToParent1(event: TransferToParent1): void {}

export function handleURI(event: URI): void {}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll1(event: ApprovalForAll1): void {}

export function handleTransfer(event: Transfer): void {}
