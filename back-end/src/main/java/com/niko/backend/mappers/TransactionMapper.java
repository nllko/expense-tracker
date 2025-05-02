package com.niko.backend.mappers;

import com.niko.backend.DTOs.TransactionDTO;
import com.niko.backend.entities.Transaction;
import org.mapstruct.*;

import java.util.List;

@Mapper
public interface TransactionMapper {
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Transaction transactionDtoToTransaction(TransactionDTO transactionDTO);

    List<TransactionDTO> transactionsToTransactionDTOList(List<Transaction> transactions);
}
