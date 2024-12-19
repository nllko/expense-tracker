package com.niko.backend.repositories;

import com.niko.backend.DTOs.MonthlySummaryDTO;
import com.niko.backend.entities.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
  @Query("SELECT t FROM Transaction t WHERE t.date BETWEEN :startDate AND :endDate")
  List<Transaction> findByMonth(
      @Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

  @Query(
      """
              SELECT new com.niko.backend.DTOs.MonthlySummaryDTO(
                        SUM(t.amount),
                        SUM(CASE WHEN t.type = 'EXPENSE' THEN t.amount ELSE null END),
                        SUM(CASE WHEN t.type = 'INCOME' THEN t.amount ELSE null END)
                       )
                       FROM Transaction t
                       WHERE t.date BETWEEN :startDate AND :endDate
              """)
  MonthlySummaryDTO findMonthlySummary(
      @Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);
}
