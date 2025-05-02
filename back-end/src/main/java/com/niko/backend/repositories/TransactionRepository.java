package com.niko.backend.repositories;

import com.niko.backend.DTOs.BalanceDTO;
import com.niko.backend.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
        List<Transaction> findByDateBetweenOrderByDateDescCreatedAtDesc(LocalDateTime startDate, LocalDateTime endDate);
        List<Transaction> findAllByOrderByDateDescCreatedAtDesc();

        @Query("""
                        SELECT new com.niko.backend.DTOs.BalanceDTO(
                                  SUM(t.amount),
                                  SUM(CASE WHEN t.type = 'EXPENSE' THEN t.amount ELSE null END),
                                  SUM(CASE WHEN t.type = 'INCOME' THEN t.amount ELSE null END)
                                 )
                                 FROM Transaction t
                                 WHERE t.date BETWEEN :startDate AND :endDate
                                 GROUP BY EXTRACT(YEAR FROM t.date),EXTRACT(MONTH FROM t.date)
                        """)
        BalanceDTO findBalanceByPeriod(
                        @Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);

        @Query("""
                        SELECT new com.niko.backend.DTOs.BalanceDTO(
                                  SUM(t.amount),
                                  SUM(CASE WHEN t.type = 'EXPENSE' THEN t.amount ELSE null END),
                                  SUM(CASE WHEN t.type = 'INCOME' THEN t.amount ELSE null END)
                                 )
                                 FROM Transaction t
                        """)
        BalanceDTO findTotalBalance();
}
