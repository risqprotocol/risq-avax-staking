import { BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer
} from "../generated/RisqAVAXStaking/RisqStaking"
import { TransferType } from "../generated/schema"
export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export function handleTransfer(event: Transfer): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type

  if(event.params.from.toHexString() == ADDRESS_ZERO){
    let entity = new TransferType(event.transaction.hash.toHexString())
    entity.account = event.params.to
    entity.contract = event.transaction.to!
    entity.amount = event.params.value
    entity.blockNumber = event.block.number
    entity.timestamp = event.block.timestamp
  
  
    // Entities can be written to the store with `.save()`
    entity.save()
  
  }

}

