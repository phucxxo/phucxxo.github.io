/* =============================================================================
   Offline demo dataset.

   This is a FROZEN SNAPSHOT of real backend responses, captured from a live
   run against the deterministic finance core. It exists so the published UI
   can be reviewed without a backend; every screen that uses it shows a
   "DU LIEU DEMO" banner. Nothing here is computed in the browser.

   Regenerate with: scripts/capture_demo_data.py (backend must be running).
   ============================================================================= */

window.DEMO = (function () {
  "use strict";

  var DATA = {
  "sellers": [
    {
      "seller_id": "seller_demo_001",
      "display_name": "Nha Sach Minh Anh",
      "currency": "VND"
    },
    {
      "seller_id": "seller_demo_002",
      "display_name": "Dien May Tuan Phat",
      "currency": "VND"
    },
    {
      "seller_id": "seller_demo_003",
      "display_name": "Thoi Trang Ha My",
      "currency": "VND"
    },
    {
      "seller_id": "seller_demo_004",
      "display_name": "My Pham Lan Chi",
      "currency": "VND"
    }
  ],
  "stats": {
    "sellers": 4,
    "workflows": 4,
    "actions": 2,
    "actions_by_status": {
      "EXECUTED": 1,
      "AWAITING_APPROVAL": 1
    },
    "workflows_by_status": {
      "WAITING_APPROVAL": 2,
      "POLICY_REJECTED": 1,
      "NO_ACTION_NEEDED": 1
    },
    "awaiting_approval": 1,
    "executed_total": 257850000.0,
    "total_exposure": 562850000.0,
    "risk_bands": {
      "MEDIUM": 1,
      "LOW": 1,
      "HIGH": 2
    }
  },
  "adminSellers": [
    {
      "seller_id": "seller_demo_001",
      "display_name": "Nha Sach Minh Anh",
      "currency": "VND",
      "cash_balance": 60000000.0,
      "open_loan_balance": 20000000.0,
      "supplier_payables": 25000000.0,
      "current_inventory_value": 90000000.0,
      "avg_daily_sales": 18000000.0,
      "exposure": 45000000.0,
      "risk_band": "MEDIUM",
      "pd": 0.047512,
      "recommended_credit_limit": 130000000.0,
      "workflow_count": 1,
      "action_count": 1,
      "actions_by_status": {
        "AWAITING_APPROVAL": 1
      },
      "awaiting_approval": 1,
      "total_executed": 0.0,
      "latest_workflow_id": "wf_947a7fb1703b4239",
      "latest_status": "WAITING_APPROVAL",
      "latest_at": "2026-09-21T09:35:18.537313"
    },
    {
      "seller_id": "seller_demo_002",
      "display_name": "Dien May Tuan Phat",
      "currency": "VND",
      "cash_balance": 400000000.0,
      "open_loan_balance": 0.0,
      "supplier_payables": 10000000.0,
      "current_inventory_value": 250000000.0,
      "avg_daily_sales": 30000000.0,
      "exposure": 10000000.0,
      "risk_band": "LOW",
      "pd": 0.005817,
      "recommended_credit_limit": 300000000.0,
      "workflow_count": 1,
      "action_count": 0,
      "actions_by_status": {},
      "awaiting_approval": 0,
      "total_executed": 0.0,
      "latest_workflow_id": "wf_66f84e3e842e43f8",
      "latest_status": "NO_ACTION_NEEDED",
      "latest_at": "2026-09-21T09:35:35.003844"
    },
    {
      "seller_id": "seller_demo_003",
      "display_name": "Thoi Trang Ha My",
      "currency": "VND",
      "cash_balance": 8000000.0,
      "open_loan_balance": 90000000.0,
      "supplier_payables": 180000000.0,
      "current_inventory_value": 15000000.0,
      "avg_daily_sales": 4000000.0,
      "exposure": 270000000.0,
      "risk_band": "HIGH",
      "pd": 0.233969,
      "recommended_credit_limit": 0.0,
      "workflow_count": 1,
      "action_count": 0,
      "actions_by_status": {},
      "awaiting_approval": 0,
      "total_executed": 0.0,
      "latest_workflow_id": "wf_54632286de7d48d7",
      "latest_status": "POLICY_REJECTED",
      "latest_at": "2026-09-21T09:35:45.132981"
    },
    {
      "seller_id": "seller_demo_004",
      "display_name": "My Pham Lan Chi",
      "currency": "VND",
      "cash_balance": 30000000.0,
      "open_loan_balance": 117850000.0,
      "supplier_payables": 120000000.0,
      "current_inventory_value": 407850000.0,
      "avg_daily_sales": 25000000.0,
      "exposure": 237850000.0,
      "risk_band": "HIGH",
      "pd": 0.113949,
      "recommended_credit_limit": 70000000.0,
      "workflow_count": 1,
      "action_count": 1,
      "actions_by_status": {
        "EXECUTED": 1
      },
      "awaiting_approval": 0,
      "total_executed": 257850000.0,
      "latest_workflow_id": "wf_0fd75ae54bcb476e",
      "latest_status": "WAITING_APPROVAL",
      "latest_at": "2026-09-21T09:35:59.695453"
    }
  ],
  "workflows": [
    {
      "workflow_id": "wf_0fd75ae54bcb476e",
      "seller_id": "seller_demo_004",
      "display_name": "My Pham Lan Chi",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngay toi toi co thieu von nhap hang khong?",
      "created_at": "2026-09-21T09:35:45.136150",
      "updated_at": "2026-09-21T09:35:59.695453",
      "parent_workflow_id": null,
      "action_id": "act_82ad14b4c3384ae9",
      "capital_need": 257850000.0,
      "loan_amount": 87850000.0,
      "risk_band": "LOW",
      "tool_calls": 9,
      "errors": 0
    },
    {
      "workflow_id": "wf_54632286de7d48d7",
      "seller_id": "seller_demo_003",
      "display_name": "Thoi Trang Ha My",
      "status": "POLICY_REJECTED",
      "orchestrator": "deterministic",
      "user_message": "30 ngay toi toi co thieu von nhap hang khong?",
      "created_at": "2026-09-21T09:35:35.006171",
      "updated_at": "2026-09-21T09:35:45.132981",
      "parent_workflow_id": null,
      "action_id": null,
      "capital_need": 15860000.0,
      "loan_amount": 0.0,
      "risk_band": "HIGH",
      "tool_calls": 8,
      "errors": 0
    },
    {
      "workflow_id": "wf_66f84e3e842e43f8",
      "seller_id": "seller_demo_002",
      "display_name": "Dien May Tuan Phat",
      "status": "NO_ACTION_NEEDED",
      "orchestrator": "deterministic",
      "user_message": "30 ngay toi toi co thieu von nhap hang khong?",
      "created_at": "2026-09-21T09:35:18.539513",
      "updated_at": "2026-09-21T09:35:35.003844",
      "parent_workflow_id": null,
      "action_id": null,
      "capital_need": 0.0,
      "loan_amount": 0.0,
      "risk_band": "LOW",
      "tool_calls": 8,
      "errors": 0
    },
    {
      "workflow_id": "wf_947a7fb1703b4239",
      "seller_id": "seller_demo_001",
      "display_name": "Nha Sach Minh Anh",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngay toi toi co thieu von nhap hang khong?",
      "created_at": "2026-09-21T09:34:19.064586",
      "updated_at": "2026-09-21T09:35:18.537313",
      "parent_workflow_id": null,
      "action_id": "act_553f611338c243af",
      "capital_need": 137120000.0,
      "loan_amount": 82120000.0,
      "risk_band": "MEDIUM",
      "tool_calls": 9,
      "errors": 0
    }
  ],
  "details": {
    "wf_0fd75ae54bcb476e": {
      "workflow_id": "wf_0fd75ae54bcb476e",
      "seller_id": "seller_demo_004",
      "display_name": "My Pham Lan Chi",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngay toi toi co thieu von nhap hang khong?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T09:35:45.136150",
      "updated_at": "2026-09-21T09:35:59.695453",
      "facts": {
        "currency": "VND",
        "cash_balance": 120000000.0,
        "pending_marketplace_payout": 60000000.0,
        "open_loan_balance": 30000000.0,
        "supplier_payables": 40000000.0,
        "horizon_days": 30,
        "expected_sales": 1321950000.0,
        "required_inventory_cost": 257850000.0,
        "projected_stockout_days": 3.5714,
        "forecast_confidence": 0.8749,
        "pd": 0.02586,
        "risk_band": "LOW",
        "risk_score": 0.914857,
        "liquidity_score": 0.857143,
        "recommended_credit_limit": 220000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 257850000.0,
        "cash_amount": 90000000.0,
        "supplier_credit_amount": 80000000.0,
        "loan_amount": 87850000.0,
        "estimated_financing_cost": 1310363.01,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": true,
        "requires_human_approval": true,
        "policy_reasons": [
          "WITHIN_LIMITS",
          "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD"
        ],
        "max_executable_amount": 257850000.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 80000000.0,
            "fee": 480000.0,
            "total_due": 80480000.0,
            "due_date": "2026-10-20",
            "tenor_days": 30
          },
          {
            "source": "bank_loan",
            "principal": 87850000.0,
            "fee": 830363.01,
            "total_due": 88680363.01,
            "due_date": "2026-10-20",
            "tenor_days": 30
          }
        ]
      },
      "forecast": {
        "seller_id": "seller_demo_004",
        "horizon_days": 30,
        "expected_sales": 1321950000.0,
        "required_inventory_cost": 257850000.0,
        "projected_stockout_days": 3.5714,
        "confidence": 0.8749,
        "engine_version": "mock-forecast-v1",
        "sku_plan": [
          {
            "sku": "SKU-SERUM",
            "forecast_daily_units": 25.2,
            "on_hand": 90,
            "lead_time_days": 9,
            "safety_stock_days": 3,
            "required_units": 303,
            "reorder_units": 213,
            "unit_cost": 610000.0,
            "reorder_cost": 129930000.0,
            "days_of_cover": 3.5714
          },
          {
            "sku": "SKU-CREAM",
            "forecast_daily_units": 16.1,
            "on_hand": 70,
            "lead_time_days": 11,
            "safety_stock_days": 3,
            "required_units": 226,
            "reorder_units": 156,
            "unit_cost": 820000.0,
            "reorder_cost": 127920000.0,
            "days_of_cover": 4.3478
          }
        ]
      },
      "risk": {
        "seller_id": "seller_demo_004",
        "pd": 0.02586,
        "liquidity_score": 0.857143,
        "risk_score": 0.914857,
        "recommended_limit": 220000000.0,
        "risk_band": "LOW",
        "engine_version": "mock-risk-v1",
        "factors": {
          "liquidity_ratio": 2.571429,
          "liquidity_score": 0.857143,
          "sales_factor": 1.0,
          "leverage_ratio": 0.093333,
          "leverage_factor": 0.906667,
          "monthly_sales": 750000000.0,
          "bank_headroom": 220000000.0,
          "raw_limit_before_cap": 299266071.43
        }
      },
      "capital_plan": {
        "seller_id": "seller_demo_004",
        "total_need": 257850000.0,
        "cash_amount": 90000000.0,
        "supplier_credit_amount": 80000000.0,
        "loan_amount": 87850000.0,
        "estimated_financing_cost": 1310363.01,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "funding_capacity": 390000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "cost_breakdown": {
          "cash": 0.0,
          "supplier_credit": 480000.0,
          "loan": 830363.01,
          "tenor_days": 30.0,
          "loan_cost_rate": 0.009452,
          "supplier_cost_rate": 0.006,
          "cash_capacity": 90000000.0,
          "supplier_capacity": 80000000.0,
          "loan_capacity": 220000000.0
        },
        "engine_version": "greedy-optimizer-v1"
      },
      "policy_decision": {
        "approved": true,
        "requires_human_approval": true,
        "reasons": [
          "WITHIN_LIMITS",
          "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD"
        ],
        "max_executable_amount": 257850000.0,
        "evaluated_rules": [
          "RULE-001",
          "RULE-002",
          "RULE-003",
          "RULE-004",
          "RULE-005",
          "RULE-006",
          "RULE-007",
          "RULE-008"
        ],
        "policy_version": "policy-v1"
      },
      "opportunity": {
        "opportunity_detected": true,
        "type": "WORKING_CAPITAL_GAP",
        "urgency": "HIGH",
        "evidence": [
          "SKU-SERUM: 4.1 days of cover is below the 9-day supplier lead time",
          "SKU-CREAM: 4.7 days of cover is below the 11-day supplier lead time"
        ],
        "recommended_next_tool": "forecast_inventory_need"
      },
      "repayment_schedule": [
        {
          "source": "supplier_credit",
          "principal": 80000000.0,
          "fee": 480000.0,
          "total_due": 80480000.0,
          "due_date": "2026-10-20",
          "tenor_days": 30
        },
        {
          "source": "bank_loan",
          "principal": 87850000.0,
          "fee": 830363.01,
          "total_due": 88680363.01,
          "due_date": "2026-10-20",
          "tenor_days": 30
        }
      ],
      "seller_state_at_run": {
        "seller_id": "seller_demo_004",
        "display_name": "My Pham Lan Chi",
        "cash_balance": 120000000.0,
        "available_bank_credit": 250000000.0,
        "current_inventory_value": 150000000.0,
        "avg_daily_sales": 25000000.0,
        "pending_marketplace_payout": 60000000.0,
        "supplier_payables": 40000000.0,
        "open_loan_balance": 30000000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-25"
      },
      "errors": [],
      "trace": [
        "step 1: get_seller_state -> ok",
        "step 2: get_inventory_snapshot -> ok",
        "step 3: get_marketplace_metrics -> ok",
        "step 4: get_supplier_terms -> ok",
        "step 5: forecast_inventory_need -> ok",
        "step 6: calculate_risk -> ok",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: create_action_proposal -> ok"
      ],
      "tool_calls": [
        {
          "tool_call_id": "tc_e8f6a1997b9d4409",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.532,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "9de45bf0fd372e64bd2ec494d4f9d89f",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "seller_id": "seller_demo_004",
            "display_name": "My Pham Lan Chi",
            "cash_balance": 120000000.0,
            "available_bank_credit": 250000000.0,
            "current_inventory_value": 150000000.0,
            "avg_daily_sales": 25000000.0,
            "pending_marketplace_payout": 60000000.0,
            "supplier_payables": 40000000.0,
            "open_loan_balance": 30000000.0,
            "currency": "VND",
            "expected_payout_date": "2026-09-25"
          },
          "created_at": "2026-09-21T09:35:45.136947"
        },
        {
          "tool_call_id": "tc_df59b6ce789d4e36",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 0.631,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "4d2a2b7ba491e73d9970ab4e52e21aab",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "seller_id": "seller_demo_004",
            "reference_date": "2026-09-20",
            "items": [
              {
                "sku": "SKU-SERUM",
                "on_hand": 90,
                "avg_daily_units": 22.0,
                "unit_cost": 610000.0,
                "supplier_lead_time_days": 9
              },
              {
                "sku": "SKU-CREAM",
                "on_hand": 70,
                "avg_daily_units": 15.0,
                "unit_cost": 820000.0,
                "supplier_lead_time_days": 11
              }
            ]
          },
          "created_at": "2026-09-21T09:35:45.138873"
        },
        {
          "tool_call_id": "tc_44fabaf0d63f4aa6",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 1.236,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "90c02ca9bec0e932024c525e56f2d5e8",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "seller_id": "seller_demo_004",
            "lookback_days": 30,
            "reference_date": "2026-09-20",
            "total_orders": 60,
            "total_units": 1123,
            "gross_revenue": 1198550000.0,
            "avg_daily_revenue": 39951666.67,
            "recent_7d_avg_daily_revenue": 49100000.0,
            "previous_7d_avg_daily_revenue": 41550000.0,
            "revenue_trend_pct": 18.17,
            "units_by_sku": {
              "SKU-CREAM": 439,
              "SKU-SERUM": 684
            }
          },
          "created_at": "2026-09-21T09:35:45.141184"
        },
        {
          "tool_call_id": "tc_274cc5e6c4ed428f",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.35,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "76ccadbd9e3a2ca261239b07701cda66",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "supplier_id": "supplier_004",
            "seller_id": "seller_demo_004",
            "credit_limit": 120000000.0,
            "credit_days": 30,
            "lead_time_days": 9,
            "fee_rate": 0.006
          },
          "created_at": "2026-09-21T09:35:45.142573"
        },
        {
          "tool_call_id": "tc_28aadc4c3a6148e3",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.364,
          "input_hash": "8e7fdab48460d8c85d930953ba1b920d",
          "output_hash": "ffcf39c08e939f140c07376b320f30d1",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004",
            "horizon_days": 30
          },
          "output": {
            "seller_id": "seller_demo_004",
            "horizon_days": 30,
            "expected_sales": 1321950000.0,
            "required_inventory_cost": 257850000.0,
            "projected_stockout_days": 3.5714,
            "confidence": 0.8749,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "SKU-SERUM",
                "forecast_daily_units": 25.2,
                "on_hand": 90,
                "lead_time_days": 9,
                "safety_stock_days": 3,
                "required_units": 303,
                "reorder_units": 213,
                "unit_cost": 610000.0,
                "reorder_cost": 129930000.0,
                "days_of_cover": 3.5714
              },
              {
                "sku": "SKU-CREAM",
                "forecast_daily_units": 16.1,
                "on_hand": 70,
                "lead_time_days": 11,
                "safety_stock_days": 3,
                "required_units": 226,
                "reorder_units": 156,
                "unit_cost": 820000.0,
                "reorder_cost": 127920000.0,
                "days_of_cover": 4.3478
              }
            ]
          },
          "created_at": "2026-09-21T09:35:45.143972"
        },
        {
          "tool_call_id": "tc_9f70cc9f5c6b487e",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.278,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "f1737bd193aa3eeb4cd04319ab83b3fe",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "seller_id": "seller_demo_004",
            "pd": 0.02586,
            "liquidity_score": 0.857143,
            "risk_score": 0.914857,
            "recommended_limit": 220000000.0,
            "risk_band": "LOW",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 2.571429,
              "liquidity_score": 0.857143,
              "sales_factor": 1.0,
              "leverage_ratio": 0.093333,
              "leverage_factor": 0.906667,
              "monthly_sales": 750000000.0,
              "bank_headroom": 220000000.0,
              "raw_limit_before_cap": 299266071.43
            }
          },
          "created_at": "2026-09-21T09:35:45.145323"
        },
        {
          "tool_call_id": "tc_f305be5d32764362",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.255,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "097932cd7f7e06f8efd6e49059ffe1b9",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "seller_id": "seller_demo_004",
            "total_need": 257850000.0,
            "cash_amount": 90000000.0,
            "supplier_credit_amount": 80000000.0,
            "loan_amount": 87850000.0,
            "estimated_financing_cost": 1310363.01,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 390000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 480000.0,
              "loan": 830363.01,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.009452,
              "supplier_cost_rate": 0.006,
              "cash_capacity": 90000000.0,
              "supplier_capacity": 80000000.0,
              "loan_capacity": 220000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "created_at": "2026-09-21T09:35:45.146679"
        },
        {
          "tool_call_id": "tc_be2e39ca5df1434d",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.237,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "7fd8b878194467a864e3b150e5e5433e",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "approved": true,
            "requires_human_approval": true,
            "reasons": [
              "WITHIN_LIMITS",
              "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD"
            ],
            "max_executable_amount": 257850000.0,
            "evaluated_rules": [
              "RULE-001",
              "RULE-002",
              "RULE-003",
              "RULE-004",
              "RULE-005",
              "RULE-006",
              "RULE-007",
              "RULE-008"
            ],
            "policy_version": "policy-v1"
          },
          "created_at": "2026-09-21T09:35:45.148135"
        },
        {
          "tool_call_id": "tc_2f65aaf60c9a4e5a",
          "tool_name": "create_action_proposal",
          "agent": "orchestrator",
          "step": 9,
          "success": true,
          "latency_ms": 0.751,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "89069e1b60ccc9296bae4adf492492c2",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "action_id": "act_82ad14b4c3384ae9",
            "seller_id": "seller_demo_004",
            "action_type": "FINANCING",
            "amount": 257850000.0,
            "status": "AWAITING_APPROVAL",
            "requires_human_approval": true,
            "expires_at": "2026-09-21T10:05:45.149436",
            "created_at": "2026-09-21T09:35:45.149688",
            "executed": false,
            "provider_reference": null
          },
          "created_at": "2026-09-21T09:35:45.150057"
        },
        {
          "tool_call_id": "tc_afea51fe5164487c",
          "tool_name": "execute_approved_action",
          "agent": "execution",
          "step": 0,
          "success": true,
          "latency_ms": 2.146,
          "input_hash": "4b181f236ee884e527b051b505708b07",
          "output_hash": "bdc90238db342c9de382aefd370209d5",
          "error_message": null,
          "input": {
            "action_id": "act_82ad14b4c3384ae9"
          },
          "output": {
            "action_id": "act_82ad14b4c3384ae9",
            "seller_id": "seller_demo_004",
            "action_type": "FINANCING",
            "amount": 257850000.0,
            "status": "EXECUTED",
            "requires_human_approval": false,
            "expires_at": null,
            "created_at": "2026-09-21T09:35:59.702873",
            "executed": true,
            "provider_reference": "mock_87e22a3ae9b64aa3b093f8dd185cf416"
          },
          "created_at": "2026-09-21T09:35:59.704286"
        }
      ],
      "audit": [
        {
          "agent": "orchestrator",
          "step": 1,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_seller_state",
          "status": "OK",
          "latency_ms": 0.532,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.137489"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 0.631,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.139191"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 1.236,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.141503"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.35,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.142873"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.364,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.144280"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.278,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.145633"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.255,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.146997"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.237,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.148444"
        },
        {
          "agent": "orchestrator",
          "step": 9,
          "model": null,
          "prompt_version": null,
          "tool_name": "create_action_proposal",
          "status": "OK",
          "latency_ms": 0.751,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:45.150338"
        },
        {
          "agent": "workflow",
          "step": 0,
          "model": null,
          "prompt_version": "deterministic-sequence-v1",
          "tool_name": null,
          "status": "WAITING_APPROVAL",
          "latency_ms": 0.0,
          "error": null,
          "detail": {
            "action_id": "act_82ad14b4c3384ae9",
            "explanation_source": "gemini",
            "tool_calls": 9,
            "degraded": false
          },
          "created_at": "2026-09-21T09:35:59.695862"
        },
        {
          "agent": "execution",
          "step": 0,
          "model": null,
          "prompt_version": null,
          "tool_name": null,
          "status": "EXECUTED",
          "latency_ms": 0.0,
          "error": null,
          "detail": {
            "action_id": "act_82ad14b4c3384ae9",
            "execution_id": "exec_6c455bc6556c4669",
            "amount": 257850000.0,
            "balance_delta": {
              "cash_used": 90000000.0,
              "supplier_credit_drawn": 80000000.0,
              "loan_drawn": 87850000.0,
              "inventory_value_added": 257850000.0
            }
          },
          "created_at": "2026-09-21T09:35:59.703958"
        },
        {
          "agent": "execution",
          "step": 0,
          "model": null,
          "prompt_version": null,
          "tool_name": "execute_approved_action",
          "status": "OK",
          "latency_ms": 2.146,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:59.704565"
        }
      ],
      "action": {
        "action_id": "act_82ad14b4c3384ae9",
        "workflow_id": "wf_0fd75ae54bcb476e",
        "seller_id": "seller_demo_004",
        "action_type": "FINANCING",
        "amount": 257850000.0,
        "status": "EXECUTED",
        "policy_decision": {
          "approved": true,
          "requires_human_approval": true,
          "reasons": [
            "WITHIN_LIMITS",
            "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD"
          ],
          "max_executable_amount": 257850000.0,
          "evaluated_rules": [
            "RULE-001",
            "RULE-002",
            "RULE-003",
            "RULE-004",
            "RULE-005",
            "RULE-006",
            "RULE-007",
            "RULE-008"
          ],
          "policy_version": "policy-v1"
        },
        "payload": {
          "capital_plan": {
            "seller_id": "seller_demo_004",
            "total_need": 257850000.0,
            "cash_amount": 90000000.0,
            "supplier_credit_amount": 80000000.0,
            "loan_amount": 87850000.0,
            "estimated_financing_cost": 1310363.01,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 390000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 480000.0,
              "loan": 830363.01,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.009452,
              "supplier_cost_rate": 0.006,
              "cash_capacity": 90000000.0,
              "supplier_capacity": 80000000.0,
              "loan_capacity": 220000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "forecast": {
            "seller_id": "seller_demo_004",
            "horizon_days": 30,
            "expected_sales": 1321950000.0,
            "required_inventory_cost": 257850000.0,
            "projected_stockout_days": 3.5714,
            "confidence": 0.8749,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "SKU-SERUM",
                "forecast_daily_units": 25.2,
                "on_hand": 90,
                "lead_time_days": 9,
                "safety_stock_days": 3,
                "required_units": 303,
                "reorder_units": 213,
                "unit_cost": 610000.0,
                "reorder_cost": 129930000.0,
                "days_of_cover": 3.5714
              },
              {
                "sku": "SKU-CREAM",
                "forecast_daily_units": 16.1,
                "on_hand": 70,
                "lead_time_days": 11,
                "safety_stock_days": 3,
                "required_units": 226,
                "reorder_units": 156,
                "unit_cost": 820000.0,
                "reorder_cost": 127920000.0,
                "days_of_cover": 4.3478
              }
            ]
          },
          "risk": {
            "seller_id": "seller_demo_004",
            "pd": 0.02586,
            "liquidity_score": 0.857143,
            "risk_score": 0.914857,
            "recommended_limit": 220000000.0,
            "risk_band": "LOW",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 2.571429,
              "liquidity_score": 0.857143,
              "sales_factor": 1.0,
              "leverage_ratio": 0.093333,
              "leverage_factor": 0.906667,
              "monthly_sales": 750000000.0,
              "bank_headroom": 220000000.0,
              "raw_limit_before_cap": 299266071.43
            }
          },
          "supplier_terms": {
            "supplier_id": "supplier_004",
            "seller_id": "seller_demo_004",
            "credit_limit": 120000000.0,
            "credit_days": 30,
            "lead_time_days": 9,
            "fee_rate": 0.006
          },
          "repayment_schedule": [
            {
              "source": "supplier_credit",
              "principal": 80000000.0,
              "fee": 480000.0,
              "total_due": 80480000.0,
              "due_date": "2026-10-20",
              "tenor_days": 30
            },
            {
              "source": "bank_loan",
              "principal": 87850000.0,
              "fee": 830363.01,
              "total_due": 88680363.01,
              "due_date": "2026-10-20",
              "tenor_days": 30
            }
          ],
          "facts": {
            "currency": "VND",
            "cash_balance": 120000000.0,
            "pending_marketplace_payout": 60000000.0,
            "open_loan_balance": 30000000.0,
            "supplier_payables": 40000000.0,
            "horizon_days": 30,
            "expected_sales": 1321950000.0,
            "required_inventory_cost": 257850000.0,
            "projected_stockout_days": 3.5714,
            "forecast_confidence": 0.8749,
            "pd": 0.02586,
            "risk_band": "LOW",
            "risk_score": 0.914857,
            "liquidity_score": 0.857143,
            "recommended_credit_limit": 220000000.0,
            "risk_engine_version": "mock-risk-v1",
            "capital_need": 257850000.0,
            "cash_amount": 90000000.0,
            "supplier_credit_amount": 80000000.0,
            "loan_amount": 87850000.0,
            "estimated_financing_cost": 1310363.01,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "policy_approved": true,
            "requires_human_approval": true,
            "policy_reasons": [
              "WITHIN_LIMITS",
              "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD"
            ],
            "max_executable_amount": 257850000.0,
            "repayment_schedule": [
              {
                "source": "supplier_credit",
                "principal": 80000000.0,
                "fee": 480000.0,
                "total_due": 80480000.0,
                "due_date": "2026-10-20",
                "tenor_days": 30
              },
              {
                "source": "bank_loan",
                "principal": 87850000.0,
                "fee": 830363.01,
                "total_due": 88680363.01,
                "due_date": "2026-10-20",
                "tenor_days": 30
              }
            ]
          },
          "user_message": "30 ngay toi toi co thieu von nhap hang khong?"
        },
        "created_at": "2026-09-21T09:35:45.149688",
        "approved_by": "admin",
        "approved_at": "2026-09-21T09:35:59.700400",
        "rejected_by": null,
        "rejected_at": null,
        "executed_at": "2026-09-21T09:35:59.703210",
        "expires_at": "2026-09-21T10:05:45.149436"
      },
      "execution": {
        "execution_id": "exec_6c455bc6556c4669",
        "action_id": "act_82ad14b4c3384ae9",
        "seller_id": "seller_demo_004",
        "amount": 257850000.0,
        "execution_type": "MOCK_FINANCING",
        "provider": "bank_mock",
        "provider_reference": "mock_87e22a3ae9b64aa3b093f8dd185cf416",
        "status": "SUCCESS",
        "created_at": "2026-09-21T09:35:59.702873",
        "detail": {
          "execution_mode": "mock",
          "bank_id": "bank_mock_001",
          "capital_plan": {
            "seller_id": "seller_demo_004",
            "total_need": 257850000.0,
            "cash_amount": 90000000.0,
            "supplier_credit_amount": 80000000.0,
            "loan_amount": 87850000.0,
            "estimated_financing_cost": 1310363.01,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 390000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 480000.0,
              "loan": 830363.01,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.009452,
              "supplier_cost_rate": 0.006,
              "cash_capacity": 90000000.0,
              "supplier_capacity": 80000000.0,
              "loan_capacity": 220000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          }
        }
      }
    },
    "wf_54632286de7d48d7": {
      "workflow_id": "wf_54632286de7d48d7",
      "seller_id": "seller_demo_003",
      "display_name": "Thoi Trang Ha My",
      "status": "POLICY_REJECTED",
      "orchestrator": "deterministic",
      "user_message": "30 ngay toi toi co thieu von nhap hang khong?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T09:35:35.006171",
      "updated_at": "2026-09-21T09:35:45.132981",
      "facts": {
        "currency": "VND",
        "cash_balance": 8000000.0,
        "pending_marketplace_payout": 3000000.0,
        "open_loan_balance": 90000000.0,
        "supplier_payables": 180000000.0,
        "horizon_days": 30,
        "expected_sales": 90720000.0,
        "required_inventory_cost": 15860000.0,
        "projected_stockout_days": 3.6111,
        "forecast_confidence": 0.8162,
        "pd": 0.233969,
        "risk_band": "HIGH",
        "risk_score": 0.065432,
        "liquidity_score": 0.01358,
        "recommended_credit_limit": 0.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 15860000.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "FUNDING_SHORTFALL",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": false,
        "requires_human_approval": false,
        "policy_reasons": [
          "RISK_BAND_HIGH"
        ],
        "max_executable_amount": 0.0
      },
      "forecast": {
        "seller_id": "seller_demo_003",
        "horizon_days": 30,
        "expected_sales": 90720000.0,
        "required_inventory_cost": 15860000.0,
        "projected_stockout_days": 3.6111,
        "confidence": 0.8162,
        "engine_version": "mock-forecast-v1",
        "sku_plan": [
          {
            "sku": "SKU-DRESS",
            "forecast_daily_units": 7.2,
            "on_hand": 26,
            "lead_time_days": 9,
            "safety_stock_days": 3,
            "required_units": 87,
            "reorder_units": 61,
            "unit_cost": 260000.0,
            "reorder_cost": 15860000.0,
            "days_of_cover": 3.6111
          }
        ]
      },
      "risk": {
        "seller_id": "seller_demo_003",
        "pd": 0.233969,
        "liquidity_score": 0.01358,
        "risk_score": 0.065432,
        "recommended_limit": 0.0,
        "risk_band": "HIGH",
        "engine_version": "mock-risk-v1",
        "factors": {
          "liquidity_ratio": 0.040741,
          "liquidity_score": 0.01358,
          "sales_factor": 0.2,
          "leverage_ratio": 2.25,
          "leverage_factor": 0.0,
          "monthly_sales": 120000000.0,
          "bank_headroom": 0.0,
          "raw_limit_before_cap": 0.0
        }
      },
      "capital_plan": {
        "seller_id": "seller_demo_003",
        "total_need": 15860000.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "FUNDING_SHORTFALL",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "funding_capacity": 0.0,
        "shortfall": 15860000.0,
        "feasible": false,
        "cost_breakdown": {
          "cash": 0.0,
          "supplier_credit": 0.0,
          "loan": 0.0,
          "tenor_days": 30.0,
          "loan_cost_rate": 0.01274,
          "supplier_cost_rate": 0.008,
          "cash_capacity": 0.0,
          "supplier_capacity": 0.0,
          "loan_capacity": 0.0
        },
        "engine_version": "greedy-optimizer-v1"
      },
      "policy_decision": {
        "approved": false,
        "requires_human_approval": false,
        "reasons": [
          "RISK_BAND_HIGH"
        ],
        "max_executable_amount": 0.0,
        "evaluated_rules": [
          "RULE-001",
          "RULE-002",
          "RULE-003",
          "RULE-004",
          "RULE-005",
          "RULE-006",
          "RULE-007",
          "RULE-008"
        ],
        "policy_version": "policy-v1"
      },
      "opportunity": {
        "opportunity_detected": true,
        "type": "WORKING_CAPITAL_GAP",
        "urgency": "HIGH",
        "evidence": [
          "SKU-DRESS: 3.2 days of cover is below the 9-day supplier lead time"
        ],
        "recommended_next_tool": "forecast_inventory_need"
      },
      "repayment_schedule": [],
      "seller_state_at_run": {
        "seller_id": "seller_demo_003",
        "display_name": "Thoi Trang Ha My",
        "cash_balance": 8000000.0,
        "available_bank_credit": 60000000.0,
        "current_inventory_value": 15000000.0,
        "avg_daily_sales": 4000000.0,
        "pending_marketplace_payout": 3000000.0,
        "supplier_payables": 180000000.0,
        "open_loan_balance": 90000000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-22"
      },
      "errors": [],
      "trace": [
        "step 1: get_seller_state -> ok",
        "step 2: get_inventory_snapshot -> ok",
        "step 3: get_marketplace_metrics -> ok",
        "step 4: get_supplier_terms -> ok",
        "step 5: forecast_inventory_need -> ok",
        "step 6: calculate_risk -> ok",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "policy rejected the plan; stopping before proposal"
      ],
      "tool_calls": [
        {
          "tool_call_id": "tc_b530b36fe368415f",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.451,
          "input_hash": "6a956c2f216b5df342b8f853ef628234",
          "output_hash": "927a1661ca2ab977e76a09d155a451a2",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_003"
          },
          "output": {
            "seller_id": "seller_demo_003",
            "display_name": "Thoi Trang Ha My",
            "cash_balance": 8000000.0,
            "available_bank_credit": 60000000.0,
            "current_inventory_value": 15000000.0,
            "avg_daily_sales": 4000000.0,
            "pending_marketplace_payout": 3000000.0,
            "supplier_payables": 180000000.0,
            "open_loan_balance": 90000000.0,
            "currency": "VND",
            "expected_payout_date": "2026-09-22"
          },
          "created_at": "2026-09-21T09:35:35.006797"
        },
        {
          "tool_call_id": "tc_d605f811d07a47a5",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 0.498,
          "input_hash": "6a956c2f216b5df342b8f853ef628234",
          "output_hash": "1c204bc307d6c2ee9a3b6a3d3f0139eb",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_003"
          },
          "output": {
            "seller_id": "seller_demo_003",
            "reference_date": "2026-09-20",
            "items": [
              {
                "sku": "SKU-DRESS",
                "on_hand": 26,
                "avg_daily_units": 8.0,
                "unit_cost": 260000.0,
                "supplier_lead_time_days": 9
              }
            ]
          },
          "created_at": "2026-09-21T09:35:35.008295"
        },
        {
          "tool_call_id": "tc_9879bd82ff6e4164",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 1.397,
          "input_hash": "6a956c2f216b5df342b8f853ef628234",
          "output_hash": "bf514068f725716207fa6ddb713a931d",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_003"
          },
          "output": {
            "seller_id": "seller_demo_003",
            "lookback_days": 30,
            "reference_date": "2026-09-20",
            "total_orders": 30,
            "total_units": 242,
            "gross_revenue": 101640000.0,
            "avg_daily_revenue": 3388000.0,
            "recent_7d_avg_daily_revenue": 2520000.0,
            "previous_7d_avg_daily_revenue": 3360000.0,
            "revenue_trend_pct": -25.0,
            "units_by_sku": {
              "SKU-DRESS": 242
            }
          },
          "created_at": "2026-09-21T09:35:35.010697"
        },
        {
          "tool_call_id": "tc_1983bc656abe4371",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.265,
          "input_hash": "6a956c2f216b5df342b8f853ef628234",
          "output_hash": "bcb185753b08e311e9db2cc07b6943f6",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_003"
          },
          "output": {
            "supplier_id": "supplier_003",
            "seller_id": "seller_demo_003",
            "credit_limit": 30000000.0,
            "credit_days": 30,
            "lead_time_days": 9,
            "fee_rate": 0.008
          },
          "created_at": "2026-09-21T09:35:35.011986"
        },
        {
          "tool_call_id": "tc_9c246e995cbc4118",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.427,
          "input_hash": "727fc8b9a14461c3eaf5e8ef3202a8e0",
          "output_hash": "20d5d546d7ff46fb20c334595d662dda",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_003",
            "horizon_days": 30
          },
          "output": {
            "seller_id": "seller_demo_003",
            "horizon_days": 30,
            "expected_sales": 90720000.0,
            "required_inventory_cost": 15860000.0,
            "projected_stockout_days": 3.6111,
            "confidence": 0.8162,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "SKU-DRESS",
                "forecast_daily_units": 7.2,
                "on_hand": 26,
                "lead_time_days": 9,
                "safety_stock_days": 3,
                "required_units": 87,
                "reorder_units": 61,
                "unit_cost": 260000.0,
                "reorder_cost": 15860000.0,
                "days_of_cover": 3.6111
              }
            ]
          },
          "created_at": "2026-09-21T09:35:35.013429"
        },
        {
          "tool_call_id": "tc_53f193c3228a4cee",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.271,
          "input_hash": "6a956c2f216b5df342b8f853ef628234",
          "output_hash": "33946ec4dda2105b1ea8d61ead36b69c",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_003"
          },
          "output": {
            "seller_id": "seller_demo_003",
            "pd": 0.233969,
            "liquidity_score": 0.01358,
            "risk_score": 0.065432,
            "recommended_limit": 0.0,
            "risk_band": "HIGH",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 0.040741,
              "liquidity_score": 0.01358,
              "sales_factor": 0.2,
              "leverage_ratio": 2.25,
              "leverage_factor": 0.0,
              "monthly_sales": 120000000.0,
              "bank_headroom": 0.0,
              "raw_limit_before_cap": 0.0
            }
          },
          "created_at": "2026-09-21T09:35:35.014791"
        },
        {
          "tool_call_id": "tc_71bc969ca7e14257",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.418,
          "input_hash": "6a956c2f216b5df342b8f853ef628234",
          "output_hash": "161679b039fadd74232378787eb25b8e",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_003"
          },
          "output": {
            "seller_id": "seller_demo_003",
            "total_need": 15860000.0,
            "cash_amount": 0.0,
            "supplier_credit_amount": 0.0,
            "loan_amount": 0.0,
            "estimated_financing_cost": 0.0,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "FUNDING_SHORTFALL",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 0.0,
            "shortfall": 15860000.0,
            "feasible": false,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 0.0,
              "loan": 0.0,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.01274,
              "supplier_cost_rate": 0.008,
              "cash_capacity": 0.0,
              "supplier_capacity": 0.0,
              "loan_capacity": 0.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "created_at": "2026-09-21T09:35:35.016306"
        },
        {
          "tool_call_id": "tc_6a4190684051488d",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.207,
          "input_hash": "6a956c2f216b5df342b8f853ef628234",
          "output_hash": "f488ae94f1abeaa83816c5d296c5d3e7",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_003"
          },
          "output": {
            "approved": false,
            "requires_human_approval": false,
            "reasons": [
              "RISK_BAND_HIGH"
            ],
            "max_executable_amount": 0.0,
            "evaluated_rules": [
              "RULE-001",
              "RULE-002",
              "RULE-003",
              "RULE-004",
              "RULE-005",
              "RULE-006",
              "RULE-007",
              "RULE-008"
            ],
            "policy_version": "policy-v1"
          },
          "created_at": "2026-09-21T09:35:35.017647"
        }
      ],
      "audit": [
        {
          "agent": "orchestrator",
          "step": 1,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_seller_state",
          "status": "OK",
          "latency_ms": 0.451,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:35.007103"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 0.498,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:35.008579"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 1.397,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:35.011006"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.265,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:35.012275"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.427,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:35.013740"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.271,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:35.015099"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.418,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:35.016621"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.207,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:35.017950"
        },
        {
          "agent": "workflow",
          "step": 0,
          "model": null,
          "prompt_version": "deterministic-sequence-v1",
          "tool_name": null,
          "status": "POLICY_REJECTED",
          "latency_ms": 0.0,
          "error": null,
          "detail": {
            "action_id": null,
            "explanation_source": "gemini",
            "tool_calls": 8,
            "degraded": false
          },
          "created_at": "2026-09-21T09:35:45.133485"
        }
      ],
      "action": null,
      "execution": null
    },
    "wf_66f84e3e842e43f8": {
      "workflow_id": "wf_66f84e3e842e43f8",
      "seller_id": "seller_demo_002",
      "display_name": "Dien May Tuan Phat",
      "status": "NO_ACTION_NEEDED",
      "orchestrator": "deterministic",
      "user_message": "30 ngay toi toi co thieu von nhap hang khong?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T09:35:18.539513",
      "updated_at": "2026-09-21T09:35:35.003844",
      "facts": {
        "currency": "VND",
        "cash_balance": 400000000.0,
        "pending_marketplace_payout": 80000000.0,
        "open_loan_balance": 0.0,
        "supplier_payables": 10000000.0,
        "horizon_days": 30,
        "expected_sales": 1518000000.0,
        "required_inventory_cost": 0.0,
        "projected_stockout_days": null,
        "forecast_confidence": 0.817,
        "pd": 0.005817,
        "risk_band": "LOW",
        "risk_score": 0.996667,
        "liquidity_score": 1.0,
        "recommended_credit_limit": 300000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 0.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-10-20",
        "rationale_codes": [
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED"
        ],
        "policy_approved": true,
        "requires_human_approval": false,
        "policy_reasons": [
          "NO_FUNDING_REQUIRED"
        ],
        "max_executable_amount": 0.0
      },
      "forecast": {
        "seller_id": "seller_demo_002",
        "horizon_days": 30,
        "expected_sales": 1518000000.0,
        "required_inventory_cost": 0.0,
        "projected_stockout_days": null,
        "confidence": 0.817,
        "engine_version": "mock-forecast-v1",
        "sku_plan": [
          {
            "sku": "SKU-TV",
            "forecast_daily_units": 4.0,
            "on_hand": 260,
            "lead_time_days": 10,
            "safety_stock_days": 3,
            "required_units": 52,
            "reorder_units": 0,
            "unit_cost": 4800000.0,
            "reorder_cost": 0.0,
            "days_of_cover": 30.0
          },
          {
            "sku": "SKU-AC",
            "forecast_daily_units": 3.0,
            "on_hand": 210,
            "lead_time_days": 12,
            "safety_stock_days": 3,
            "required_units": 45,
            "reorder_units": 0,
            "unit_cost": 6100000.0,
            "reorder_cost": 0.0,
            "days_of_cover": 30.0
          }
        ]
      },
      "risk": {
        "seller_id": "seller_demo_002",
        "pd": 0.005817,
        "liquidity_score": 1.0,
        "risk_score": 0.996667,
        "recommended_limit": 300000000.0,
        "risk_band": "LOW",
        "engine_version": "mock-risk-v1",
        "factors": {
          "liquidity_ratio": 48.0,
          "liquidity_score": 1.0,
          "sales_factor": 1.0,
          "leverage_ratio": 0.011111,
          "leverage_factor": 0.988889,
          "monthly_sales": 900000000.0,
          "bank_headroom": 300000000.0,
          "raw_limit_before_cap": 432549000.0
        }
      },
      "capital_plan": {
        "seller_id": "seller_demo_002",
        "total_need": 0.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-10-20",
        "rationale_codes": [
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED"
        ],
        "funding_capacity": 860000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "cost_breakdown": {
          "cash": 0.0,
          "supplier_credit": 0.0,
          "loan": 0.0,
          "tenor_days": 45.0,
          "loan_cost_rate": 0.012945,
          "supplier_cost_rate": 0.004,
          "cash_capacity": 370000000.0,
          "supplier_capacity": 190000000.0,
          "loan_capacity": 300000000.0
        },
        "engine_version": "greedy-optimizer-v1"
      },
      "policy_decision": {
        "approved": true,
        "requires_human_approval": false,
        "reasons": [
          "NO_FUNDING_REQUIRED"
        ],
        "max_executable_amount": 0.0,
        "evaluated_rules": [
          "RULE-001",
          "RULE-002",
          "RULE-003",
          "RULE-004",
          "RULE-005",
          "RULE-006",
          "RULE-007",
          "RULE-008"
        ],
        "policy_version": "policy-v1"
      },
      "opportunity": {
        "opportunity_detected": false,
        "type": "NONE",
        "urgency": "NONE",
        "evidence": [
          "Inventory cover is above the reorder point for every SKU"
        ],
        "recommended_next_tool": null
      },
      "repayment_schedule": [],
      "seller_state_at_run": {
        "seller_id": "seller_demo_002",
        "display_name": "Dien May Tuan Phat",
        "cash_balance": 400000000.0,
        "available_bank_credit": 300000000.0,
        "current_inventory_value": 250000000.0,
        "avg_daily_sales": 30000000.0,
        "pending_marketplace_payout": 80000000.0,
        "supplier_payables": 10000000.0,
        "open_loan_balance": 0.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-24"
      },
      "errors": [],
      "trace": [
        "step 1: get_seller_state -> ok",
        "step 2: get_inventory_snapshot -> ok",
        "step 3: get_marketplace_metrics -> ok",
        "step 4: get_supplier_terms -> ok",
        "step 5: forecast_inventory_need -> ok",
        "step 6: calculate_risk -> ok",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: final answer"
      ],
      "tool_calls": [
        {
          "tool_call_id": "tc_70eee159fbfc40ee",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.455,
          "input_hash": "f3ee674bb26141afebf6fbf9c827316a",
          "output_hash": "d5874182abf8d5c9332d53b490302fa5",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_002"
          },
          "output": {
            "seller_id": "seller_demo_002",
            "display_name": "Dien May Tuan Phat",
            "cash_balance": 400000000.0,
            "available_bank_credit": 300000000.0,
            "current_inventory_value": 250000000.0,
            "avg_daily_sales": 30000000.0,
            "pending_marketplace_payout": 80000000.0,
            "supplier_payables": 10000000.0,
            "open_loan_balance": 0.0,
            "currency": "VND",
            "expected_payout_date": "2026-09-24"
          },
          "created_at": "2026-09-21T09:35:18.540135"
        },
        {
          "tool_call_id": "tc_270d4cd3f1d545ce",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 0.554,
          "input_hash": "f3ee674bb26141afebf6fbf9c827316a",
          "output_hash": "7e28c3b3f8bf9295cb1efb5c1f765023",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_002"
          },
          "output": {
            "seller_id": "seller_demo_002",
            "reference_date": "2026-09-20",
            "items": [
              {
                "sku": "SKU-TV",
                "on_hand": 260,
                "avg_daily_units": 4.0,
                "unit_cost": 4800000.0,
                "supplier_lead_time_days": 10
              },
              {
                "sku": "SKU-AC",
                "on_hand": 210,
                "avg_daily_units": 3.0,
                "unit_cost": 6100000.0,
                "supplier_lead_time_days": 12
              }
            ]
          },
          "created_at": "2026-09-21T09:35:18.541705"
        },
        {
          "tool_call_id": "tc_b658cfc25d3b44c3",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 1.254,
          "input_hash": "f3ee674bb26141afebf6fbf9c827316a",
          "output_hash": "b2d95aa79dee6b18f3ccf50c335b278d",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_002"
          },
          "output": {
            "seller_id": "seller_demo_002",
            "lookback_days": 30,
            "reference_date": "2026-09-20",
            "total_orders": 60,
            "total_units": 210,
            "gross_revenue": 1518000000.0,
            "avg_daily_revenue": 50600000.0,
            "recent_7d_avg_daily_revenue": 50600000.0,
            "previous_7d_avg_daily_revenue": 50600000.0,
            "revenue_trend_pct": 0.0,
            "units_by_sku": {
              "SKU-AC": 90,
              "SKU-TV": 120
            }
          },
          "created_at": "2026-09-21T09:35:18.544040"
        },
        {
          "tool_call_id": "tc_a8104bb8dd4d4b1c",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.349,
          "input_hash": "f3ee674bb26141afebf6fbf9c827316a",
          "output_hash": "94dd5b25432dc12528a5bfa843d558c9",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_002"
          },
          "output": {
            "supplier_id": "supplier_002",
            "seller_id": "seller_demo_002",
            "credit_limit": 200000000.0,
            "credit_days": 45,
            "lead_time_days": 10,
            "fee_rate": 0.004
          },
          "created_at": "2026-09-21T09:35:18.545441"
        },
        {
          "tool_call_id": "tc_03a03cff1fbc4ef8",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.515,
          "input_hash": "8e8841af46f7d0f07274a43c4035c879",
          "output_hash": "bba429696e349e6fc3145650f3202134",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_002",
            "horizon_days": 30
          },
          "output": {
            "seller_id": "seller_demo_002",
            "horizon_days": 30,
            "expected_sales": 1518000000.0,
            "required_inventory_cost": 0.0,
            "projected_stockout_days": null,
            "confidence": 0.817,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "SKU-TV",
                "forecast_daily_units": 4.0,
                "on_hand": 260,
                "lead_time_days": 10,
                "safety_stock_days": 3,
                "required_units": 52,
                "reorder_units": 0,
                "unit_cost": 4800000.0,
                "reorder_cost": 0.0,
                "days_of_cover": 30.0
              },
              {
                "sku": "SKU-AC",
                "forecast_daily_units": 3.0,
                "on_hand": 210,
                "lead_time_days": 12,
                "safety_stock_days": 3,
                "required_units": 45,
                "reorder_units": 0,
                "unit_cost": 6100000.0,
                "reorder_cost": 0.0,
                "days_of_cover": 30.0
              }
            ]
          },
          "created_at": "2026-09-21T09:35:18.547034"
        },
        {
          "tool_call_id": "tc_1760a006782544f0",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.33,
          "input_hash": "f3ee674bb26141afebf6fbf9c827316a",
          "output_hash": "cbd8feace76b1209e582c649ffef9526",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_002"
          },
          "output": {
            "seller_id": "seller_demo_002",
            "pd": 0.005817,
            "liquidity_score": 1.0,
            "risk_score": 0.996667,
            "recommended_limit": 300000000.0,
            "risk_band": "LOW",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 48.0,
              "liquidity_score": 1.0,
              "sales_factor": 1.0,
              "leverage_ratio": 0.011111,
              "leverage_factor": 0.988889,
              "monthly_sales": 900000000.0,
              "bank_headroom": 300000000.0,
              "raw_limit_before_cap": 432549000.0
            }
          },
          "created_at": "2026-09-21T09:35:18.548470"
        },
        {
          "tool_call_id": "tc_07d08903bdec4f7b",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.286,
          "input_hash": "f3ee674bb26141afebf6fbf9c827316a",
          "output_hash": "8d432cbe54ec5b950640f173c3461964",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_002"
          },
          "output": {
            "seller_id": "seller_demo_002",
            "total_need": 0.0,
            "cash_amount": 0.0,
            "supplier_credit_amount": 0.0,
            "loan_amount": 0.0,
            "estimated_financing_cost": 0.0,
            "funding_date": "2026-10-20",
            "rationale_codes": [
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED"
            ],
            "funding_capacity": 860000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 0.0,
              "loan": 0.0,
              "tenor_days": 45.0,
              "loan_cost_rate": 0.012945,
              "supplier_cost_rate": 0.004,
              "cash_capacity": 370000000.0,
              "supplier_capacity": 190000000.0,
              "loan_capacity": 300000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "created_at": "2026-09-21T09:35:18.553929"
        },
        {
          "tool_call_id": "tc_ecf6844b04f540d9",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.196,
          "input_hash": "f3ee674bb26141afebf6fbf9c827316a",
          "output_hash": "e30582afef6d143d77efc2f203f74784",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_002"
          },
          "output": {
            "approved": true,
            "requires_human_approval": false,
            "reasons": [
              "NO_FUNDING_REQUIRED"
            ],
            "max_executable_amount": 0.0,
            "evaluated_rules": [
              "RULE-001",
              "RULE-002",
              "RULE-003",
              "RULE-004",
              "RULE-005",
              "RULE-006",
              "RULE-007",
              "RULE-008"
            ],
            "policy_version": "policy-v1"
          },
          "created_at": "2026-09-21T09:35:18.555558"
        }
      ],
      "audit": [
        {
          "agent": "orchestrator",
          "step": 1,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_seller_state",
          "status": "OK",
          "latency_ms": 0.455,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:18.540424"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 0.554,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:18.542023"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 1.254,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:18.544365"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.349,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:18.545747"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.515,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:18.547374"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.33,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:18.548781"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.286,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:18.554252"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.196,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:35:18.555845"
        },
        {
          "agent": "workflow",
          "step": 0,
          "model": null,
          "prompt_version": "deterministic-sequence-v1",
          "tool_name": null,
          "status": "NO_ACTION_NEEDED",
          "latency_ms": 0.0,
          "error": null,
          "detail": {
            "action_id": null,
            "explanation_source": "gemini",
            "tool_calls": 8,
            "degraded": false
          },
          "created_at": "2026-09-21T09:35:35.004230"
        }
      ],
      "action": null,
      "execution": null
    },
    "wf_947a7fb1703b4239": {
      "workflow_id": "wf_947a7fb1703b4239",
      "seller_id": "seller_demo_001",
      "display_name": "Nha Sach Minh Anh",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngay toi toi co thieu von nhap hang khong?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T09:34:19.064586",
      "updated_at": "2026-09-21T09:35:18.537313",
      "facts": {
        "currency": "VND",
        "cash_balance": 60000000.0,
        "pending_marketplace_payout": 35000000.0,
        "open_loan_balance": 20000000.0,
        "supplier_payables": 25000000.0,
        "horizon_days": 30,
        "expected_sales": 893565000.0,
        "required_inventory_cost": 137120000.0,
        "projected_stockout_days": 3.125,
        "forecast_confidence": 0.791,
        "pd": 0.047512,
        "risk_band": "MEDIUM",
        "risk_score": 0.826481,
        "liquidity_score": 0.703704,
        "recommended_credit_limit": 130000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 137120000.0,
        "cash_amount": 30000000.0,
        "supplier_credit_amount": 25000000.0,
        "loan_amount": 82120000.0,
        "estimated_financing_cost": 934950.68,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": true,
        "requires_human_approval": true,
        "policy_reasons": [
          "WITHIN_LIMITS",
          "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
          "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
        ],
        "max_executable_amount": 137120000.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 25000000.0,
            "fee": 125000.0,
            "total_due": 25125000.0,
            "due_date": "2026-10-20",
            "tenor_days": 30
          },
          {
            "source": "bank_loan",
            "principal": 82120000.0,
            "fee": 809950.68,
            "total_due": 82929950.68,
            "due_date": "2026-10-20",
            "tenor_days": 30
          }
        ]
      },
      "forecast": {
        "seller_id": "seller_demo_001",
        "horizon_days": 30,
        "expected_sales": 893565000.0,
        "required_inventory_cost": 137120000.0,
        "projected_stockout_days": 3.125,
        "confidence": 0.791,
        "engine_version": "mock-forecast-v1",
        "sku_plan": [
          {
            "sku": "SKU-A",
            "forecast_daily_units": 25.6,
            "on_hand": 80,
            "lead_time_days": 7,
            "safety_stock_days": 3,
            "required_units": 256,
            "reorder_units": 176,
            "unit_cost": 550000.0,
            "reorder_cost": 96800000.0,
            "days_of_cover": 3.125
          },
          {
            "sku": "SKU-B",
            "forecast_daily_units": 18.7,
            "on_hand": 110,
            "lead_time_days": 8,
            "safety_stock_days": 3,
            "required_units": 206,
            "reorder_units": 96,
            "unit_cost": 420000.0,
            "reorder_cost": 40320000.0,
            "days_of_cover": 5.8824
          }
        ]
      },
      "risk": {
        "seller_id": "seller_demo_001",
        "pd": 0.047512,
        "liquidity_score": 0.703704,
        "risk_score": 0.826481,
        "recommended_limit": 130000000.0,
        "risk_band": "MEDIUM",
        "engine_version": "mock-risk-v1",
        "factors": {
          "liquidity_ratio": 2.111111,
          "liquidity_score": 0.703704,
          "sales_factor": 0.9,
          "leverage_ratio": 0.083333,
          "leverage_factor": 0.916667,
          "monthly_sales": 540000000.0,
          "bank_headroom": 130000000.0,
          "raw_limit_before_cap": 170813333.33
        }
      },
      "capital_plan": {
        "seller_id": "seller_demo_001",
        "total_need": 137120000.0,
        "cash_amount": 30000000.0,
        "supplier_credit_amount": 25000000.0,
        "loan_amount": 82120000.0,
        "estimated_financing_cost": 934950.68,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "funding_capacity": 185000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "cost_breakdown": {
          "cash": 0.0,
          "supplier_credit": 125000.0,
          "loan": 809950.68,
          "tenor_days": 30.0,
          "loan_cost_rate": 0.009863,
          "supplier_cost_rate": 0.005,
          "cash_capacity": 30000000.0,
          "supplier_capacity": 25000000.0,
          "loan_capacity": 130000000.0
        },
        "engine_version": "greedy-optimizer-v1"
      },
      "policy_decision": {
        "approved": true,
        "requires_human_approval": true,
        "reasons": [
          "WITHIN_LIMITS",
          "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
          "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
        ],
        "max_executable_amount": 137120000.0,
        "evaluated_rules": [
          "RULE-001",
          "RULE-002",
          "RULE-003",
          "RULE-004",
          "RULE-005",
          "RULE-006",
          "RULE-007",
          "RULE-008"
        ],
        "policy_version": "policy-v1"
      },
      "opportunity": {
        "opportunity_detected": true,
        "type": "WORKING_CAPITAL_GAP",
        "urgency": "HIGH",
        "evidence": [
          "SKU-A: 5.7 days of cover is below the 7-day supplier lead time"
        ],
        "recommended_next_tool": "forecast_inventory_need"
      },
      "repayment_schedule": [
        {
          "source": "supplier_credit",
          "principal": 25000000.0,
          "fee": 125000.0,
          "total_due": 25125000.0,
          "due_date": "2026-10-20",
          "tenor_days": 30
        },
        {
          "source": "bank_loan",
          "principal": 82120000.0,
          "fee": 809950.68,
          "total_due": 82929950.68,
          "due_date": "2026-10-20",
          "tenor_days": 30
        }
      ],
      "seller_state_at_run": {
        "seller_id": "seller_demo_001",
        "display_name": "Nha Sach Minh Anh",
        "cash_balance": 60000000.0,
        "available_bank_credit": 150000000.0,
        "current_inventory_value": 90000000.0,
        "avg_daily_sales": 18000000.0,
        "pending_marketplace_payout": 35000000.0,
        "supplier_payables": 25000000.0,
        "open_loan_balance": 20000000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-23"
      },
      "errors": [],
      "trace": [
        "step 1: get_seller_state -> ok",
        "step 2: get_inventory_snapshot -> ok",
        "step 3: get_marketplace_metrics -> ok",
        "step 4: get_supplier_terms -> ok",
        "step 5: forecast_inventory_need -> ok",
        "step 6: calculate_risk -> ok",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: create_action_proposal -> ok"
      ],
      "tool_calls": [
        {
          "tool_call_id": "tc_ee2403d43a344a9d",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.475,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "5cf7028ec338d7e3adf6013d8bcfb3fb",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "seller_id": "seller_demo_001",
            "display_name": "Nha Sach Minh Anh",
            "cash_balance": 60000000.0,
            "available_bank_credit": 150000000.0,
            "current_inventory_value": 90000000.0,
            "avg_daily_sales": 18000000.0,
            "pending_marketplace_payout": 35000000.0,
            "supplier_payables": 25000000.0,
            "open_loan_balance": 20000000.0,
            "currency": "VND",
            "expected_payout_date": "2026-09-23"
          },
          "created_at": "2026-09-21T09:34:19.065279"
        },
        {
          "tool_call_id": "tc_e7745d86ce794d16",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 0.528,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "a4639fe1fe1e0d082c49e14290f2c49f",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "seller_id": "seller_demo_001",
            "reference_date": "2026-09-20",
            "items": [
              {
                "sku": "SKU-A",
                "on_hand": 80,
                "avg_daily_units": 14.0,
                "unit_cost": 550000.0,
                "supplier_lead_time_days": 7
              },
              {
                "sku": "SKU-B",
                "on_hand": 110,
                "avg_daily_units": 10.0,
                "unit_cost": 420000.0,
                "supplier_lead_time_days": 8
              }
            ]
          },
          "created_at": "2026-09-21T09:34:19.067050"
        },
        {
          "tool_call_id": "tc_0ed0d46d9d4e46a1",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 1.164,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "9c5897b777d864ecfe3247b741873d7d",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "seller_id": "seller_demo_001",
            "lookback_days": 30,
            "reference_date": "2026-09-20",
            "total_orders": 60,
            "total_units": 1083,
            "gross_revenue": 726165000.0,
            "avg_daily_revenue": 24205500.0,
            "recent_7d_avg_daily_revenue": 37035000.0,
            "previous_7d_avg_daily_revenue": 25560000.0,
            "revenue_trend_pct": 44.89,
            "units_by_sku": {
              "SKU-A": 618,
              "SKU-B": 465
            }
          },
          "created_at": "2026-09-21T09:34:19.069254"
        },
        {
          "tool_call_id": "tc_46c9549322f04753",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.342,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "c3165dc031fdc464147b767b7480b1cc",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "supplier_id": "supplier_001",
            "seller_id": "seller_demo_001",
            "credit_limit": 50000000.0,
            "credit_days": 30,
            "lead_time_days": 7,
            "fee_rate": 0.005
          },
          "created_at": "2026-09-21T09:34:19.070728"
        },
        {
          "tool_call_id": "tc_5706c984fa584ad3",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.536,
          "input_hash": "15f64ab8c13889fc0e97c42e9b51b589",
          "output_hash": "f13f1d3e7892587e1719e653298a99db",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001",
            "horizon_days": 30
          },
          "output": {
            "seller_id": "seller_demo_001",
            "horizon_days": 30,
            "expected_sales": 893565000.0,
            "required_inventory_cost": 137120000.0,
            "projected_stockout_days": 3.125,
            "confidence": 0.791,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "SKU-A",
                "forecast_daily_units": 25.6,
                "on_hand": 80,
                "lead_time_days": 7,
                "safety_stock_days": 3,
                "required_units": 256,
                "reorder_units": 176,
                "unit_cost": 550000.0,
                "reorder_cost": 96800000.0,
                "days_of_cover": 3.125
              },
              {
                "sku": "SKU-B",
                "forecast_daily_units": 18.7,
                "on_hand": 110,
                "lead_time_days": 8,
                "safety_stock_days": 3,
                "required_units": 206,
                "reorder_units": 96,
                "unit_cost": 420000.0,
                "reorder_cost": 40320000.0,
                "days_of_cover": 5.8824
              }
            ]
          },
          "created_at": "2026-09-21T09:34:19.072480"
        },
        {
          "tool_call_id": "tc_1eea86bd1edc4214",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.344,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "fe0fbe83fd696ac6a9647bce63ac520c",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "seller_id": "seller_demo_001",
            "pd": 0.047512,
            "liquidity_score": 0.703704,
            "risk_score": 0.826481,
            "recommended_limit": 130000000.0,
            "risk_band": "MEDIUM",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 2.111111,
              "liquidity_score": 0.703704,
              "sales_factor": 0.9,
              "leverage_ratio": 0.083333,
              "leverage_factor": 0.916667,
              "monthly_sales": 540000000.0,
              "bank_headroom": 130000000.0,
              "raw_limit_before_cap": 170813333.33
            }
          },
          "created_at": "2026-09-21T09:34:19.073990"
        },
        {
          "tool_call_id": "tc_d700c8b9bc2045c8",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.525,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "47402b865c7888e6b9d2766a58c808a5",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "seller_id": "seller_demo_001",
            "total_need": 137120000.0,
            "cash_amount": 30000000.0,
            "supplier_credit_amount": 25000000.0,
            "loan_amount": 82120000.0,
            "estimated_financing_cost": 934950.68,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 185000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 125000.0,
              "loan": 809950.68,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.009863,
              "supplier_cost_rate": 0.005,
              "cash_capacity": 30000000.0,
              "supplier_capacity": 25000000.0,
              "loan_capacity": 130000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "created_at": "2026-09-21T09:34:19.075679"
        },
        {
          "tool_call_id": "tc_78189380e0a542bd",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.34,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "cbb1e22df9b4ba9aa3b2eaf4502eeac8",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "approved": true,
            "requires_human_approval": true,
            "reasons": [
              "WITHIN_LIMITS",
              "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
              "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
            ],
            "max_executable_amount": 137120000.0,
            "evaluated_rules": [
              "RULE-001",
              "RULE-002",
              "RULE-003",
              "RULE-004",
              "RULE-005",
              "RULE-006",
              "RULE-007",
              "RULE-008"
            ],
            "policy_version": "policy-v1"
          },
          "created_at": "2026-09-21T09:34:19.077251"
        },
        {
          "tool_call_id": "tc_6d3312d954624ec3",
          "tool_name": "create_action_proposal",
          "agent": "orchestrator",
          "step": 9,
          "success": true,
          "latency_ms": 0.786,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "f209ccffab3ace9110872d9f678b09d6",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "action_id": "act_553f611338c243af",
            "seller_id": "seller_demo_001",
            "action_type": "FINANCING",
            "amount": 137120000.0,
            "status": "AWAITING_APPROVAL",
            "requires_human_approval": true,
            "expires_at": "2026-09-21T10:04:19.078603",
            "created_at": "2026-09-21T09:34:19.078864",
            "executed": false,
            "provider_reference": null
          },
          "created_at": "2026-09-21T09:34:19.079265"
        }
      ],
      "audit": [
        {
          "agent": "orchestrator",
          "step": 1,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_seller_state",
          "status": "OK",
          "latency_ms": 0.475,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.065700"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 0.528,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.067357"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 1.164,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.069560"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.342,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.071066"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.536,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.072827"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.344,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.074316"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.525,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.076019"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.34,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.077568"
        },
        {
          "agent": "orchestrator",
          "step": 9,
          "model": null,
          "prompt_version": null,
          "tool_name": "create_action_proposal",
          "status": "OK",
          "latency_ms": 0.786,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T09:34:19.079545"
        },
        {
          "agent": "workflow",
          "step": 0,
          "model": null,
          "prompt_version": "deterministic-sequence-v1",
          "tool_name": null,
          "status": "WAITING_APPROVAL",
          "latency_ms": 0.0,
          "error": null,
          "detail": {
            "action_id": "act_553f611338c243af",
            "explanation_source": "gemini",
            "tool_calls": 9,
            "degraded": false
          },
          "created_at": "2026-09-21T09:35:18.537686"
        }
      ],
      "action": {
        "action_id": "act_553f611338c243af",
        "workflow_id": "wf_947a7fb1703b4239",
        "seller_id": "seller_demo_001",
        "action_type": "FINANCING",
        "amount": 137120000.0,
        "status": "AWAITING_APPROVAL",
        "policy_decision": {
          "approved": true,
          "requires_human_approval": true,
          "reasons": [
            "WITHIN_LIMITS",
            "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
            "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
          ],
          "max_executable_amount": 137120000.0,
          "evaluated_rules": [
            "RULE-001",
            "RULE-002",
            "RULE-003",
            "RULE-004",
            "RULE-005",
            "RULE-006",
            "RULE-007",
            "RULE-008"
          ],
          "policy_version": "policy-v1"
        },
        "payload": {
          "capital_plan": {
            "seller_id": "seller_demo_001",
            "total_need": 137120000.0,
            "cash_amount": 30000000.0,
            "supplier_credit_amount": 25000000.0,
            "loan_amount": 82120000.0,
            "estimated_financing_cost": 934950.68,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 185000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 125000.0,
              "loan": 809950.68,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.009863,
              "supplier_cost_rate": 0.005,
              "cash_capacity": 30000000.0,
              "supplier_capacity": 25000000.0,
              "loan_capacity": 130000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "forecast": {
            "seller_id": "seller_demo_001",
            "horizon_days": 30,
            "expected_sales": 893565000.0,
            "required_inventory_cost": 137120000.0,
            "projected_stockout_days": 3.125,
            "confidence": 0.791,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "SKU-A",
                "forecast_daily_units": 25.6,
                "on_hand": 80,
                "lead_time_days": 7,
                "safety_stock_days": 3,
                "required_units": 256,
                "reorder_units": 176,
                "unit_cost": 550000.0,
                "reorder_cost": 96800000.0,
                "days_of_cover": 3.125
              },
              {
                "sku": "SKU-B",
                "forecast_daily_units": 18.7,
                "on_hand": 110,
                "lead_time_days": 8,
                "safety_stock_days": 3,
                "required_units": 206,
                "reorder_units": 96,
                "unit_cost": 420000.0,
                "reorder_cost": 40320000.0,
                "days_of_cover": 5.8824
              }
            ]
          },
          "risk": {
            "seller_id": "seller_demo_001",
            "pd": 0.047512,
            "liquidity_score": 0.703704,
            "risk_score": 0.826481,
            "recommended_limit": 130000000.0,
            "risk_band": "MEDIUM",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 2.111111,
              "liquidity_score": 0.703704,
              "sales_factor": 0.9,
              "leverage_ratio": 0.083333,
              "leverage_factor": 0.916667,
              "monthly_sales": 540000000.0,
              "bank_headroom": 130000000.0,
              "raw_limit_before_cap": 170813333.33
            }
          },
          "supplier_terms": {
            "supplier_id": "supplier_001",
            "seller_id": "seller_demo_001",
            "credit_limit": 50000000.0,
            "credit_days": 30,
            "lead_time_days": 7,
            "fee_rate": 0.005
          },
          "repayment_schedule": [
            {
              "source": "supplier_credit",
              "principal": 25000000.0,
              "fee": 125000.0,
              "total_due": 25125000.0,
              "due_date": "2026-10-20",
              "tenor_days": 30
            },
            {
              "source": "bank_loan",
              "principal": 82120000.0,
              "fee": 809950.68,
              "total_due": 82929950.68,
              "due_date": "2026-10-20",
              "tenor_days": 30
            }
          ],
          "facts": {
            "currency": "VND",
            "cash_balance": 60000000.0,
            "pending_marketplace_payout": 35000000.0,
            "open_loan_balance": 20000000.0,
            "supplier_payables": 25000000.0,
            "horizon_days": 30,
            "expected_sales": 893565000.0,
            "required_inventory_cost": 137120000.0,
            "projected_stockout_days": 3.125,
            "forecast_confidence": 0.791,
            "pd": 0.047512,
            "risk_band": "MEDIUM",
            "risk_score": 0.826481,
            "liquidity_score": 0.703704,
            "recommended_credit_limit": 130000000.0,
            "risk_engine_version": "mock-risk-v1",
            "capital_need": 137120000.0,
            "cash_amount": 30000000.0,
            "supplier_credit_amount": 25000000.0,
            "loan_amount": 82120000.0,
            "estimated_financing_cost": 934950.68,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "policy_approved": true,
            "requires_human_approval": true,
            "policy_reasons": [
              "WITHIN_LIMITS",
              "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
              "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
            ],
            "max_executable_amount": 137120000.0,
            "repayment_schedule": [
              {
                "source": "supplier_credit",
                "principal": 25000000.0,
                "fee": 125000.0,
                "total_due": 25125000.0,
                "due_date": "2026-10-20",
                "tenor_days": 30
              },
              {
                "source": "bank_loan",
                "principal": 82120000.0,
                "fee": 809950.68,
                "total_due": 82929950.68,
                "due_date": "2026-10-20",
                "tenor_days": 30
              }
            ]
          },
          "user_message": "30 ngay toi toi co thieu von nhap hang khong?"
        },
        "created_at": "2026-09-21T09:34:19.078864",
        "approved_by": null,
        "approved_at": null,
        "rejected_by": null,
        "rejected_at": null,
        "executed_at": null,
        "expires_at": "2026-09-21T10:04:19.078603"
      },
      "execution": null
    }
  },
  "replies": {
    "seller_demo_001": {
      "workflow_id": "wf_947a7fb1703b4239",
      "seller_id": "seller_demo_001",
      "status": "WAITING_APPROVAL",
      "facts": {
        "currency": "VND",
        "cash_balance": 60000000.0,
        "pending_marketplace_payout": 35000000.0,
        "open_loan_balance": 20000000.0,
        "supplier_payables": 25000000.0,
        "horizon_days": 30,
        "expected_sales": 893565000.0,
        "required_inventory_cost": 137120000.0,
        "projected_stockout_days": 3.125,
        "forecast_confidence": 0.791,
        "pd": 0.047512,
        "risk_band": "MEDIUM",
        "risk_score": 0.826481,
        "liquidity_score": 0.703704,
        "recommended_credit_limit": 130000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 137120000.0,
        "cash_amount": 30000000.0,
        "supplier_credit_amount": 25000000.0,
        "loan_amount": 82120000.0,
        "estimated_financing_cost": 934950.68,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": true,
        "requires_human_approval": true,
        "policy_reasons": [
          "WITHIN_LIMITS",
          "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
          "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
        ],
        "max_executable_amount": 137120000.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 25000000.0,
            "fee": 125000.0,
            "total_due": 25125000.0,
            "due_date": "2026-10-20",
            "tenor_days": 30
          },
          {
            "source": "bank_loan",
            "principal": 82120000.0,
            "fee": 809950.68,
            "total_due": 82929950.68,
            "due_date": "2026-10-20",
            "tenor_days": 30
          }
        ]
      },
      "explanation": "Trong 30 ngày tới, cửa hàng đang đối mặt với rủi ro thiếu hàng nghiêm trọng khi số ngày còn dư hàng để bán chỉ còn 3.125. Để đảm bảo kinh doanh, giá trị hàng cần nhập và tổng nhu cầu vốn lưu động được xác định là 137.120.000.\n\nKế hoạch tài trợ sẽ huy động từ các nguồn: sử dụng phần tài trợ bằng tiền mặt là 30.000.000, tận dụng phần tài trợ bằng tín dụng nhà cung cấp là 25.000.000, và phần còn lại thông qua phần tài trợ bằng vay ngân hàng là 82.120.000. Chi phí tài chính ước tính cho toàn bộ phương án này là 934.951.\n\nHệ thống đánh giá nhóm rủi ro của bạn ở mức MEDIUM với điểm sức khỏe tài chính là 0.826481, cho phép hạn mức tín dụng khuyến nghị là 130.000.000.\n\nVề mặt thủ tục, mặc dù policy chấp thuận là True, nhưng do số tiền vượt ngưỡng tự động nên vẫn cần người phê duyệt là True. Bạn cần hoàn tất bước phê duyệt này để kịp ngày cần giải ngân là 2026-09-20. Kế hoạch này được xây dựng dựa trên độ tin cậy dự báo là 0.791 nhằm giải quyết tình trạng hết hàng khẩn cấp.",
      "explanation_source": "gemini",
      "action_id": "act_553f611338c243af",
      "requires_user_action": true,
      "trace_summary": [
        "[1] get_seller_state: cash=60,000,000 VND",
        "[2] get_inventory_snapshot: 2 SKU(s)",
        "[3] get_marketplace_metrics: 7d trend +44.9%",
        "[4] get_supplier_terms: limit=50,000,000, 30d @ 0.500%",
        "[5] forecast_inventory_need: need=137,120,000",
        "[6] calculate_risk: pd=0.0475 band=MEDIUM limit=130,000,000",
        "[7] optimize_capital_plan: cash=30,000,000 supplier=25,000,000 loan=82,120,000",
        "[8] evaluate_policy: approved=True human=True (WITHIN_LIMITS, AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD, RISK_BAND_MEDIUM_REQUIRES_REVIEW)",
        "[9] create_action_proposal: act_553f611338c243af status=AWAITING_APPROVAL",
        "opportunity: WORKING_CAPITAL_GAP (urgency HIGH)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: create_action_proposal -> ok"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 5,
        "violations": []
      }
    },
    "seller_demo_002": {
      "workflow_id": "wf_66f84e3e842e43f8",
      "seller_id": "seller_demo_002",
      "status": "NO_ACTION_NEEDED",
      "facts": {
        "currency": "VND",
        "cash_balance": 400000000.0,
        "pending_marketplace_payout": 80000000.0,
        "open_loan_balance": 0.0,
        "supplier_payables": 10000000.0,
        "horizon_days": 30,
        "expected_sales": 1518000000.0,
        "required_inventory_cost": 0.0,
        "projected_stockout_days": null,
        "forecast_confidence": 0.817,
        "pd": 0.005817,
        "risk_band": "LOW",
        "risk_score": 0.996667,
        "liquidity_score": 1.0,
        "recommended_credit_limit": 300000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 0.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-10-20",
        "rationale_codes": [
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED"
        ],
        "policy_approved": true,
        "requires_human_approval": false,
        "policy_reasons": [
          "NO_FUNDING_REQUIRED"
        ],
        "max_executable_amount": 0.0
      },
      "explanation": "Dựa trên dữ liệu trong 30 ngày tới, doanh thu dự kiến trong kỳ của bạn là 1.518.000.000 VND. Hiện tại, giá trị hàng cần nhập là 0.0 VND, dẫn đến tổng nhu cầu vốn lưu động là 0.0 VND. Với số dư tiền mặt 400.000.000 VND và tiền sàn thương mại sắp về là 80.000.000 VND, bạn đang có nguồn vốn rất dồi dào để vận hành.\n\nKế hoạch tài trợ ghi nhận phần tài trợ bằng tiền mặt, tín dụng nhà cung cấp và vay ngân hàng đều là 0.0 VND vì bạn đã tự chủ được nguồn vốn. Đánh giá rủi ro xếp bạn vào nhóm rủi ro LOW với điểm sức khỏe tài chính là 0.996667 và điểm thanh khoản là 1.0. Hạn mức tin dung khuyến nghị bạn có thể tham khảo là 300.000.000 VND.\n\nVề các bước tiếp theo, hệ thống xác nhận policy chấp thuận là True và không cần người phê duyệt với lý do NO_FUNDING_REQUIRED. Số tiền tối đa được thực thi là 0.0 VND cho kỳ này. Kế hoạch này được xây dựng dựa trên độ tin cậy dự báo là 0.817 và xác suất vỡ nợ (PD) là 0.005817.",
      "explanation_source": "gemini",
      "action_id": null,
      "requires_user_action": false,
      "trace_summary": [
        "[1] get_seller_state: cash=400,000,000 VND",
        "[2] get_inventory_snapshot: 2 SKU(s)",
        "[3] get_marketplace_metrics: 7d trend +0.0%",
        "[4] get_supplier_terms: limit=200,000,000, 45d @ 0.400%",
        "[5] forecast_inventory_need: need=0",
        "[6] calculate_risk: pd=0.0058 band=LOW limit=300,000,000",
        "[7] optimize_capital_plan: cash=0 supplier=0 loan=0",
        "[8] evaluate_policy: approved=True human=False (NO_FUNDING_REQUIRED)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: final answer"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 4,
        "violations": []
      }
    },
    "seller_demo_003": {
      "workflow_id": "wf_54632286de7d48d7",
      "seller_id": "seller_demo_003",
      "status": "POLICY_REJECTED",
      "facts": {
        "currency": "VND",
        "cash_balance": 8000000.0,
        "pending_marketplace_payout": 3000000.0,
        "open_loan_balance": 90000000.0,
        "supplier_payables": 180000000.0,
        "horizon_days": 30,
        "expected_sales": 90720000.0,
        "required_inventory_cost": 15860000.0,
        "projected_stockout_days": 3.6111,
        "forecast_confidence": 0.8162,
        "pd": 0.233969,
        "risk_band": "HIGH",
        "risk_score": 0.065432,
        "liquidity_score": 0.01358,
        "recommended_credit_limit": 0.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 15860000.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "FUNDING_SHORTFALL",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": false,
        "requires_human_approval": false,
        "policy_reasons": [
          "RISK_BAND_HIGH"
        ],
        "max_executable_amount": 0.0
      },
      "explanation": "Trong 30 ngày tới, cửa hàng của bạn đang đối mặt với nguy cơ thiếu hụt hàng hóa khi số ngày còn dư hàng để bán chỉ còn 3.6111. Để đáp ứng doanh thu dự kiến trong kỳ là 90.720.000, giá trị hàng cần nhập là 15.860.000, cũng chính là tổng nhu cầu vốn lưu động là 15.860.000.\n\nDù nhu cầu vốn hiện hữu, kế hoạch tài trợ bằng tiền mặt, tín dụng nhà cung cấp và vay ngân hàng đều được xác định là 0.0. Điều này xuất phát từ việc nhóm rủi ro được xếp loại HIGH với xác suất vô nợ (PD) là 0.233969. Các chỉ số hỗ trợ khác như điểm sức khỏe tài chính là 0.065432 và điểm thanh khoản là 0.01358 dẫn đến hạn mức tín dụng khuyến nghị là 0.0.\n\nHệ thống không phê duyệt đề xuất này (Policy chap thuan: False) do rủi ro cao. Vì vậy, số tiền tối đa được thực thi là 0.0 và không cần người phê duyệt thêm. Quyết định này dựa trên độ tin cậy dự báo là 0.8162, ưu tiên quản trị rủi ro thay vì mở rộng nhập hàng ngay lập tức khi các chỉ số tài chính chưa đảm bảo.",
      "explanation_source": "gemini",
      "action_id": null,
      "requires_user_action": false,
      "trace_summary": [
        "[1] get_seller_state: cash=8,000,000 VND",
        "[2] get_inventory_snapshot: 1 SKU(s)",
        "[3] get_marketplace_metrics: 7d trend -25.0%",
        "[4] get_supplier_terms: limit=30,000,000, 30d @ 0.800%",
        "[5] forecast_inventory_need: need=15,860,000",
        "[6] calculate_risk: pd=0.2340 band=HIGH limit=0",
        "[7] optimize_capital_plan: cash=0 supplier=0 loan=0",
        "[8] evaluate_policy: approved=False human=False (RISK_BAND_HIGH)",
        "opportunity: WORKING_CAPITAL_GAP (urgency HIGH)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "policy rejected the plan; stopping before proposal"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 3,
        "violations": []
      }
    },
    "seller_demo_004": {
      "workflow_id": "wf_0fd75ae54bcb476e",
      "seller_id": "seller_demo_004",
      "status": "WAITING_APPROVAL",
      "facts": {
        "currency": "VND",
        "cash_balance": 120000000.0,
        "pending_marketplace_payout": 60000000.0,
        "open_loan_balance": 30000000.0,
        "supplier_payables": 40000000.0,
        "horizon_days": 30,
        "expected_sales": 1321950000.0,
        "required_inventory_cost": 257850000.0,
        "projected_stockout_days": 3.5714,
        "forecast_confidence": 0.8749,
        "pd": 0.02586,
        "risk_band": "LOW",
        "risk_score": 0.914857,
        "liquidity_score": 0.857143,
        "recommended_credit_limit": 220000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 257850000.0,
        "cash_amount": 90000000.0,
        "supplier_credit_amount": 80000000.0,
        "loan_amount": 87850000.0,
        "estimated_financing_cost": 1310363.01,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": true,
        "requires_human_approval": true,
        "policy_reasons": [
          "WITHIN_LIMITS",
          "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD"
        ],
        "max_executable_amount": 257850000.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 80000000.0,
            "fee": 480000.0,
            "total_due": 80480000.0,
            "due_date": "2026-10-20",
            "tenor_days": 30
          },
          {
            "source": "bank_loan",
            "principal": 87850000.0,
            "fee": 830363.01,
            "total_due": 88680363.01,
            "due_date": "2026-10-20",
            "tenor_days": 30
          }
        ]
      },
      "explanation": "Trong 30 ngày tới (So ngay du bao: 30), bạn đang đối mặt với nguy cơ thiếu vốn nhập hàng. Hiện tại, số ngày còn dư hàng để bán chỉ là 3.5714, trong khi giá trị hàng cần nhập để đáp ứng doanh thu dự kiến là 257.850.000.\n\nĐể giải quyết tổng nhu cầu vốn lưu động 257.850.000 này, kế hoạch đề xuất sử dụng 90.000.000 từ tiền mặt, tiếp đến là 80.000.000 từ tín dụng nhà cung cấp và phần còn lại 87.850.000 sẽ được tài trợ bằng vay ngân hàng. Thứ tự này giúp tận dụng tối đa nguồn vốn tự có và hạn mức tín dụng trước khi dùng đến khoản vay.\n\nHệ thống đánh giá bạn thuộc nhóm rủi ro LOW với điểm sức khỏe tài chính là 0.914857, cho phép hạn mức tín dụng khuyến nghị đạt 220.000.000. Hiện tại, chính sách đã chấp thuận (Policy chap thuan: True), tuy nhiên do số tiền vượt ngưỡng tự động nên vẫn cần người phê duyệt (Can nguoi phe duyet: True) trước khi thực hiện giải ngân số tiền tối đa được thực thi là 257.850.000 vào ngày 2026-09-20.\n\nKế hoạch này dựa trên độ tin cậy dự báo 0.8749 và chấp nhận chi phí tài chính ước tính là 1.310.363.",
      "explanation_source": "gemini",
      "action_id": "act_82ad14b4c3384ae9",
      "requires_user_action": true,
      "trace_summary": [
        "[1] get_seller_state: cash=120,000,000 VND",
        "[2] get_inventory_snapshot: 2 SKU(s)",
        "[3] get_marketplace_metrics: 7d trend +18.2%",
        "[4] get_supplier_terms: limit=120,000,000, 30d @ 0.600%",
        "[5] forecast_inventory_need: need=257,850,000",
        "[6] calculate_risk: pd=0.0259 band=LOW limit=220,000,000",
        "[7] optimize_capital_plan: cash=90,000,000 supplier=80,000,000 loan=87,850,000",
        "[8] evaluate_policy: approved=True human=True (WITHIN_LIMITS, AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD)",
        "[9] create_action_proposal: act_82ad14b4c3384ae9 status=AWAITING_APPROVAL",
        "opportunity: WORKING_CAPITAL_GAP (urgency HIGH)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: create_action_proposal -> ok"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 8,
        "violations": []
      }
    }
  }
};

  return {
    sellers: DATA.sellers,
    stats: DATA.stats,
    adminSellers: DATA.adminSellers,
    workflows: DATA.workflows,

    workflowDetail: function (id) {
      return DATA.details[id] || null;
    },

    /** A canned reply for the seller chat, echoing the question asked. */
    replyFor: function (sellerId, text) {
      var base = DATA.replies[sellerId] || DATA.replies[DATA.sellers[0].seller_id];
      var copy = JSON.parse(JSON.stringify(base));
      copy.user_message = text;
      return copy;
    }
  };
})();
