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
  "projects": {
    "count": 4,
    "projects": [
      {
        "project_id": "prj_6d53fdcee7494f9f",
        "owner": "seller",
        "name": "Thời Trang Anh Thư",
        "seller_id": "shop_a_thoitrang",
        "currency": "VND",
        "status": "ACTIVE",
        "source": "form",
        "created_at": "2026-09-21T13:21:52.722940",
        "updated_at": "2026-09-21T13:21:52.722946",
        "profile_status": "OK",
        "warning_count": 0,
        "conversation_count": 0,
        "message_count": 0,
        "last_message_at": null,
        "funding_status": "NONE",
        "application_id": null,
        "funding_need": 36260000.0,
        "risk_band": "LOW",
        "pd": 0.02915,
        "recommended_limit": 150000000.0
      },
      {
        "project_id": "prj_285a8d5f940e4d66",
        "owner": "seller",
        "name": "Linh Kiện Đức Minh",
        "seller_id": "shop_d_linhkien",
        "currency": "VND",
        "status": "ACTIVE",
        "source": "form",
        "created_at": "2026-09-21T13:22:48.593199",
        "updated_at": "2026-09-21T13:22:48.593204",
        "profile_status": "OK",
        "warning_count": 0,
        "conversation_count": 0,
        "message_count": 0,
        "last_message_at": null,
        "funding_status": "NONE",
        "application_id": null,
        "funding_need": 66600000.0,
        "risk_band": "HIGH",
        "pd": 0.135815,
        "recommended_limit": 15000000.0
      },
      {
        "project_id": "prj_45528d38c35249fc",
        "owner": "seller",
        "name": "Mỹ Phẩm Hà Linh",
        "seller_id": "shop_b_mympham",
        "currency": "VND",
        "status": "ACTIVE",
        "source": "form",
        "created_at": "2026-09-21T13:22:52.169409",
        "updated_at": "2026-09-21T13:22:52.169413",
        "profile_status": "OK",
        "warning_count": 0,
        "conversation_count": 0,
        "message_count": 0,
        "last_message_at": null,
        "funding_status": "NONE",
        "application_id": null,
        "funding_need": 85540000.0,
        "risk_band": "MEDIUM",
        "pd": 0.040959,
        "recommended_limit": 185000000.0
      },
      {
        "project_id": "prj_57335cc0204c4de7",
        "owner": "seller",
        "name": "Tạp Hóa Cô Ba",
        "seller_id": "shop_c_taphoa",
        "currency": "VND",
        "status": "ACTIVE",
        "source": "form",
        "created_at": "2026-09-21T13:22:57.546819",
        "updated_at": "2026-09-21T13:22:57.546823",
        "profile_status": "OK",
        "warning_count": 0,
        "conversation_count": 0,
        "message_count": 0,
        "last_message_at": null,
        "funding_status": "NONE",
        "application_id": null,
        "funding_need": 38115000.0,
        "risk_band": "MEDIUM",
        "pd": 0.063511,
        "recommended_limit": 108000000.0
      }
    ]
  },
  "conversations": {
    "prj_6d53fdcee7494f9f": [
      {
        "conversation_id": "cnv_77c3d862db68499e",
        "project_id": "prj_6d53fdcee7494f9f",
        "seller_id": "shop_a_thoitrang",
        "title": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
        "created_at": "2026-09-21T13:21:52.732109",
        "updated_at": "2026-09-21T13:22:48.570550",
        "message_count": 2,
        "last_snippet": "Chào bạn, dựa trên dữ liệu phân tích cho 30 ngày tới, tình hình kinh doanh của cửa hàng như sau:\n\nHiện tại, bạn chỉ còn đủ hàng để bán trong 3.0183 ngày, trong "
      }
    ],
    "prj_285a8d5f940e4d66": [
      {
        "conversation_id": "cnv_81db9334ef154247",
        "project_id": "prj_285a8d5f940e4d66",
        "seller_id": "shop_d_linhkien",
        "title": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
        "created_at": "2026-09-21T13:22:48.595994",
        "updated_at": "2026-09-21T13:22:52.148653",
        "message_count": 2,
        "last_snippet": "Trong 30 ngày tới, cửa hàng của bạn đang đối mặt với tình trạng thiếu hụt vốn lưu động để nhập hàng. Tổng nhu cầu vốn lưu động là 66.600.000 VND, trong khi số n"
      }
    ],
    "prj_45528d38c35249fc": [
      {
        "conversation_id": "cnv_fb46e8d55b484f1f",
        "project_id": "prj_45528d38c35249fc",
        "seller_id": "shop_b_mympham",
        "title": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
        "created_at": "2026-09-21T13:22:52.173038",
        "updated_at": "2026-09-21T13:22:57.523236",
        "message_count": 2,
        "last_snippet": "Chào bạn, dựa trên dữ liệu hiện tại, cửa hàng của bạn đang đối mặt với tình trạng thiếu hụt hàng hóa trong 7.7651 ngày tới, trong khi dự báo nhu cầu trong 30 ng"
      }
    ],
    "prj_57335cc0204c4de7": [
      {
        "conversation_id": "cnv_aa18c6e9c31d4d00",
        "project_id": "prj_57335cc0204c4de7",
        "seller_id": "shop_c_taphoa",
        "title": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
        "created_at": "2026-09-21T13:22:57.551324",
        "updated_at": "2026-09-21T13:23:02.845332",
        "message_count": 2,
        "last_snippet": "Chào bạn, trong 30 ngày tới, cửa hàng của bạn dự kiến sẽ thiếu hụt vốn để nhập hàng với tổng nhu cầu vốn lưu động là 38.115.000 VND. Hiện tại, số ngày còn đủ hà"
      }
    ]
  },
  "messages": {
    "cnv_77c3d862db68499e": [
      {
        "message_id": "msg_ac4808a8e5a545eb",
        "conversation_id": "cnv_77c3d862db68499e",
        "role": "user",
        "content": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
        "created_at": "2026-09-21T13:21:52.737939",
        "workflow_id": null,
        "action_id": null,
        "facts": null,
        "degraded": false,
        "model": null,
        "latency_ms": 0.0
      },
      {
        "message_id": "msg_62387133447042b5",
        "conversation_id": "cnv_77c3d862db68499e",
        "role": "assistant",
        "content": "Chào bạn, dựa trên dữ liệu phân tích cho 30 ngày tới, tình hình kinh doanh của cửa hàng như sau:\n\nHiện tại, bạn chỉ còn đủ hàng để bán trong 3.0183 ngày, trong khi tổng nhu cầu vốn lưu động để nhập hàng là 36.260.000 VND. Mặc dù có nguy cơ hết hàng sớm, nhưng kế hoạch tài chính đã được thiết lập để đảm bảo hoạt động của bạn.\n\nCụ thể, toàn bộ 36.260.000 VND cần thiết sẽ được tài trợ bằng phần tài trợ bằng tiền mặt là 36.260.000 VND. Bạn không cần sử dụng đến vay ngân hàng hay tín dụng nhà cung cấp, do đó chi phí tài chính ước tính là 0.0 VND.\n\nVề rủi ro, nhóm rủi ro của bạn hiện ở mức LOW với xác suất vỡ nợ là 0.02915. Hệ thống đã cấp hạn mức tín dụng khuyên nghị là 150.000.000 VND và số tiền tối đa được thực thi là 36.260.000 VND. Chính sách đã được chấp thuận vì nằm trong giới hạn cho phép, nên bạn không cần thực hiện thêm thao tác phê duyệt nào.\n\nKế hoạch này ưu tiên sử dụng nguồn tiền mặt sẵn có để tối ưu hóa chi phí vận hành.",
        "created_at": "2026-09-21T13:22:48.570427",
        "workflow_id": "wf_03ef9140cee94ca1",
        "action_id": "act_624fe049d17e4a16",
        "facts": {
          "currency": "VND",
          "cash_balance": 85000000.0,
          "pending_marketplace_payout": 40000000.0,
          "open_loan_balance": 0.0,
          "supplier_payables": 12000000.0,
          "horizon_days": 30,
          "expected_sales": 435021964.29,
          "required_inventory_cost": 36260000.0,
          "projected_stockout_days": 3.0183,
          "forecast_confidence": 0.9124,
          "pd": 0.02915,
          "risk_band": "LOW",
          "risk_score": 0.901429,
          "liquidity_score": 1.0,
          "recommended_credit_limit": 150000000.0,
          "risk_engine_version": "mock-risk-v1",
          "capital_need": 36260000.0,
          "cash_amount": 36260000.0,
          "supplier_credit_amount": 0.0,
          "loan_amount": 0.0,
          "estimated_financing_cost": 0.0,
          "funding_date": "2026-09-20",
          "rationale_codes": [
            "CASH_USED_ABOVE_MIN_RESERVE",
            "FULLY_FUNDED",
            "SUPPLIER_LINE_PARTIALLY_UTILISED",
            "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
          ],
          "policy_approved": true,
          "requires_human_approval": false,
          "policy_reasons": [
            "WITHIN_LIMITS"
          ],
          "max_executable_amount": 36260000.0
        },
        "degraded": false,
        "model": "gemini-3.1-flash-lite",
        "latency_ms": 0.0
      }
    ],
    "cnv_81db9334ef154247": [
      {
        "message_id": "msg_825c1c029afb400b",
        "conversation_id": "cnv_81db9334ef154247",
        "role": "user",
        "content": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
        "created_at": "2026-09-21T13:22:48.598167",
        "workflow_id": null,
        "action_id": null,
        "facts": null,
        "degraded": false,
        "model": null,
        "latency_ms": 0.0
      },
      {
        "message_id": "msg_90bf42fdd5f546fe",
        "conversation_id": "cnv_81db9334ef154247",
        "role": "assistant",
        "content": "Trong 30 ngày tới, cửa hàng của bạn đang đối mặt với tình trạng thiếu hụt vốn lưu động để nhập hàng. Tổng nhu cầu vốn lưu động là 66.600.000 VND, trong khi số ngày còn đủ hàng để bán chỉ là 12.7009 ngày, dẫn đến nguy cơ hết hàng trước khi kịp nhập lô mới.\n\nKế hoạch tài chính được đề xuất bao gồm: sử dụng 10.000.000 VND từ tín dụng nhà cung cấp và 15.000.000 VND từ vay ngân hàng để bù đắp một phần nhu cầu. Phần tài trợ bằng tiền mặt hiện là 0.0 VND. Chi phí tài chính ước tính cho phương án này là 495.685 VND.\n\nTuy nhiên, đánh giá rủi ro cho thấy nhóm rủi ro của bạn là HIGH với xác suất vỡ nợ là 0.135815. Do đó, chính sách hiện tại không được chấp thuận (Policy chap thuan: False) vì lý do nhóm rủi ro cao. Hạn mức tín dụng khuyến nghị chỉ là 15.000.000 VND và số tiền tối đa được thực thi hiện là 0.0 VND. Bạn chưa thể thực hiện kế hoạch này ngay lúc này.\n\nKế hoạch này dựa trên giả định về doanh thu dự kiến trong kỳ là 615.633.214 VND với độ tin cậy dự báo là 0.8947.",
        "created_at": "2026-09-21T13:22:52.148531",
        "workflow_id": "wf_28cff625554244a4",
        "action_id": null,
        "facts": {
          "currency": "VND",
          "cash_balance": 18000000.0,
          "pending_marketplace_payout": 7000000.0,
          "open_loan_balance": 75000000.0,
          "supplier_payables": 140000000.0,
          "horizon_days": 30,
          "expected_sales": 615633214.29,
          "required_inventory_cost": 66600000.0,
          "projected_stockout_days": 12.7009,
          "forecast_confidence": 0.8947,
          "pd": 0.135815,
          "risk_band": "HIGH",
          "risk_score": 0.466059,
          "liquidity_score": 0.03876,
          "recommended_credit_limit": 15000000.0,
          "risk_engine_version": "mock-risk-v1",
          "capital_need": 66600000.0,
          "cash_amount": 0.0,
          "supplier_credit_amount": 10000000.0,
          "loan_amount": 15000000.0,
          "estimated_financing_cost": 495684.93,
          "funding_date": "2026-09-20",
          "rationale_codes": [
            "SUPPLIER_CREDIT_USED",
            "BANK_LOAN_USED",
            "FUNDING_SHORTFALL",
            "SUPPLIER_LINE_PARTIALLY_UTILISED",
            "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
          ],
          "policy_approved": false,
          "requires_human_approval": false,
          "policy_reasons": [
            "RISK_BAND_HIGH"
          ],
          "max_executable_amount": 0.0,
          "repayment_schedule": [
            {
              "source": "supplier_credit",
              "principal": 10000000.0,
              "fee": 110000.0,
              "total_due": 10110000.0,
              "due_date": "2026-11-04",
              "tenor_days": 45
            },
            {
              "source": "bank_loan",
              "principal": 15000000.0,
              "fee": 385684.93,
              "total_due": 15385684.93,
              "due_date": "2026-11-04",
              "tenor_days": 45
            }
          ]
        },
        "degraded": false,
        "model": "gemini-3.1-flash-lite",
        "latency_ms": 0.0
      }
    ],
    "cnv_fb46e8d55b484f1f": [
      {
        "message_id": "msg_fa3c3bda3d26457f",
        "conversation_id": "cnv_fb46e8d55b484f1f",
        "role": "user",
        "content": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
        "created_at": "2026-09-21T13:22:52.175410",
        "workflow_id": null,
        "action_id": null,
        "facts": null,
        "degraded": false,
        "model": null,
        "latency_ms": 0.0
      },
      {
        "message_id": "msg_d1011ce893ce4205",
        "conversation_id": "cnv_fb46e8d55b484f1f",
        "role": "assistant",
        "content": "Chào bạn, dựa trên dữ liệu hiện tại, cửa hàng của bạn đang đối mặt với tình trạng thiếu hụt hàng hóa trong 7.7651 ngày tới, trong khi dự báo nhu cầu trong 30 ngày tới là 854.745.000 VND. Tổng nhu cầu vốn lưu động để nhập hàng là 85.540.000 VND.\n\nĐể đảm bảo hoạt động, kế hoạch tài chính đã được thiết lập như sau: bạn sẽ sử dụng 22.000.000 VND tiền mặt, 52.000.000 VND từ tín dụng nhà cung cấp và 11.540.000 VND từ vay ngân hàng. Thứ tự này được ưu tiên để tối ưu hóa dòng tiền và tận dụng hạn mức tín dụng hiện có.\n\nĐánh giá rủi ro của bạn thuộc nhóm MEDIUM với xác suất vỡ nợ là 0.040959. Hệ thống đã thiết lập hạn mức tín dụng khuyến nghị là 185.000.000 VND.\n\nHiện tại, chính sách đã được chấp thuận với số tiền tối đa được thực thi là 85.540.000 VND. Tuy nhiên, vì lý do nhóm rủi ro trung bình và số tiền vượt ngưỡng phê duyệt, bạn cần thực hiện bước phê duyệt cuối cùng để hoàn tất kế hoạch.\n\nLưu ý rằng kế hoạch này dựa trên độ tin cậy dự báo là 0.8722 và có thể thay đổi nếu doanh thu thực tế biến động.",
        "created_at": "2026-09-21T13:22:57.523095",
        "workflow_id": "wf_9289739c49f143e1",
        "action_id": "act_4a33f2ff28cf4d8c",
        "facts": {
          "currency": "VND",
          "cash_balance": 52000000.0,
          "pending_marketplace_payout": 35000000.0,
          "open_loan_balance": 15000000.0,
          "supplier_payables": 28000000.0,
          "horizon_days": 30,
          "expected_sales": 854745000.0,
          "required_inventory_cost": 85540000.0,
          "projected_stockout_days": 7.7651,
          "forecast_confidence": 0.8722,
          "pd": 0.040959,
          "risk_band": "MEDIUM",
          "risk_score": 0.853229,
          "liquidity_score": 0.674419,
          "recommended_credit_limit": 185000000.0,
          "risk_engine_version": "mock-risk-v1",
          "capital_need": 85540000.0,
          "cash_amount": 22000000.0,
          "supplier_credit_amount": 52000000.0,
          "loan_amount": 11540000.0,
          "estimated_financing_cost": 453641.64,
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
          "max_executable_amount": 85540000.0,
          "repayment_schedule": [
            {
              "source": "supplier_credit",
              "principal": 52000000.0,
              "fee": 312000.0,
              "total_due": 52312000.0,
              "due_date": "2026-10-20",
              "tenor_days": 30
            },
            {
              "source": "bank_loan",
              "principal": 11540000.0,
              "fee": 141641.64,
              "total_due": 11681641.64,
              "due_date": "2026-10-20",
              "tenor_days": 30
            }
          ]
        },
        "degraded": false,
        "model": "gemini-3.1-flash-lite",
        "latency_ms": 0.0
      }
    ],
    "cnv_aa18c6e9c31d4d00": [
      {
        "message_id": "msg_dec4f6216f4c422f",
        "conversation_id": "cnv_aa18c6e9c31d4d00",
        "role": "user",
        "content": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
        "created_at": "2026-09-21T13:22:57.553654",
        "workflow_id": null,
        "action_id": null,
        "facts": null,
        "degraded": false,
        "model": null,
        "latency_ms": 0.0
      },
      {
        "message_id": "msg_64da6941bf9b4e41",
        "conversation_id": "cnv_aa18c6e9c31d4d00",
        "role": "assistant",
        "content": "Chào bạn, trong 30 ngày tới, cửa hàng của bạn dự kiến sẽ thiếu hụt vốn để nhập hàng với tổng nhu cầu vốn lưu động là 38.115.000 VND. Hiện tại, số ngày còn đủ hàng để bán của bạn là 4.4737 ngày, vì vậy việc bổ sung hàng hóa là rất cần thiết để duy trì doanh thu dự kiến trong kỳ là 732.904.554 VND.\n\nKế hoạch tài chính đã được thiết lập để đáp ứng đầy đủ nhu cầu này thông qua việc kết hợp các nguồn lực: 8.000.000 VND từ tiền mặt, 5.000.000 VND từ tín dụng nhà cung cấp và 25.115.000 VND từ vay ngân hàng. Thứ tự ưu tiên này giúp tối ưu hóa dòng tiền hiện có.\n\nĐánh giá rủi ro xếp bạn vào nhóm rủi ro MEDIUM với xác suất vỡ nợ là 0.063511. Dựa trên điểm sức khỏe tài chính 0.761179, hệ thống đã đưa ra hạn mức tín dụng khuyến nghị là 108.000.000 VND.\n\nHiện tại, chính sách đã được chấp thuận (Policy chap thuan: True), nhưng bạn cần thực hiện bước phê duyệt cuối cùng để giải ngân vào ngày 2026-09-20. Kế hoạch này dựa trên giả định về độ tin cậy dự báo là 0.8994 và sự cân bằng giữa chi phí tài chính và nhu cầu hàng hóa.",
        "created_at": "2026-09-21T13:23:02.845124",
        "workflow_id": "wf_e95c33fa39994f3a",
        "action_id": "act_4013457b7cc44c92",
        "facts": {
          "currency": "VND",
          "cash_balance": 38000000.0,
          "pending_marketplace_payout": 35000000.0,
          "open_loan_balance": 12000000.0,
          "supplier_payables": 40000000.0,
          "horizon_days": 30,
          "expected_sales": 732904553.57,
          "required_inventory_cost": 38115000.0,
          "projected_stockout_days": 4.4737,
          "forecast_confidence": 0.8994,
          "pd": 0.063511,
          "risk_band": "MEDIUM",
          "risk_score": 0.761179,
          "liquidity_score": 0.467949,
          "recommended_credit_limit": 108000000.0,
          "risk_engine_version": "mock-risk-v1",
          "capital_need": 38115000.0,
          "cash_amount": 8000000.0,
          "supplier_credit_amount": 5000000.0,
          "loan_amount": 25115000.0,
          "estimated_financing_cost": 419660.75,
          "funding_date": "2026-09-20",
          "rationale_codes": [
            "CASH_USED_ABOVE_MIN_RESERVE",
            "SUPPLIER_CREDIT_USED",
            "BANK_LOAN_USED",
            "FULLY_FUNDED",
            "SUPPLIER_LINE_PARTIALLY_UTILISED"
          ],
          "policy_approved": true,
          "requires_human_approval": true,
          "policy_reasons": [
            "WITHIN_LIMITS",
            "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
          ],
          "max_executable_amount": 38115000.0,
          "repayment_schedule": [
            {
              "source": "supplier_credit",
              "principal": 5000000.0,
              "fee": 45000.0,
              "total_due": 5045000.0,
              "due_date": "2026-10-11",
              "tenor_days": 21
            },
            {
              "source": "bank_loan",
              "principal": 25115000.0,
              "fee": 374660.75,
              "total_due": 25489660.75,
              "due_date": "2026-10-20",
              "tenor_days": 30
            }
          ]
        },
        "degraded": false,
        "model": "gemini-3.1-flash-lite",
        "latency_ms": 0.0
      }
    ]
  },
  "applications": {
    "count": 2,
    "applications": [
      {
        "application_id": "app_5a34d4fefed64105",
        "project_id": "prj_6d53fdcee7494f9f",
        "seller_id": "shop_a_thoitrang",
        "seller_name": "Thời Trang Anh Thư",
        "amount": 36260000.0,
        "currency": "VND",
        "status": "SUBMITTED",
        "action_id": null,
        "bank_id": "vcb",
        "note": "Chờ thẩm định",
        "pd": 0.02915,
        "risk_band": "LOW",
        "recommended_limit": 150000000.0,
        "interest_rate": 0.112,
        "funding_plan": [
          {
            "source": "cash",
            "label": "Tiền mặt",
            "amount": 36260000.0,
            "cost": 0.0,
            "rate": 0.0
          }
        ],
        "submitted_at": "2026-09-21T13:23:02.877694",
        "decided_at": null,
        "decided_by": null,
        "timeline": [
          {
            "status": "SUBMITTED",
            "at": "2026-09-21T13:23:02.877694",
            "by": "seller",
            "note": "Chờ thẩm định"
          }
        ]
      },
      {
        "application_id": "app_e4382259f7724621",
        "project_id": "prj_45528d38c35249fc",
        "seller_id": "shop_b_mympham",
        "seller_name": "Mỹ Phẩm Hà Linh",
        "amount": 85540000.0,
        "currency": "VND",
        "status": "DISBURSED",
        "action_id": "act_4a33f2ff28cf4d8c",
        "bank_id": "tpb",
        "note": "Nhập hàng cho đợt cao điểm",
        "pd": 0.040959,
        "risk_band": "MEDIUM",
        "recommended_limit": 185000000.0,
        "interest_rate": 0.125,
        "funding_plan": [
          {
            "source": "cash",
            "label": "Tiền mặt",
            "amount": 22000000.0,
            "cost": 0.0,
            "rate": 0.0
          },
          {
            "source": "supplier",
            "label": "Tín dụng NCC",
            "amount": 52000000.0,
            "cost": 0.0,
            "rate": 0.006
          },
          {
            "source": "loan",
            "label": "Vay ngân hàng",
            "amount": 11540000.0,
            "cost": 141641.64,
            "rate": 0.125
          }
        ],
        "submitted_at": "2026-09-21T13:23:02.852363",
        "decided_at": "2026-09-21T13:23:02.875428",
        "decided_by": "admin",
        "timeline": [
          {
            "status": "SUBMITTED",
            "at": "2026-09-21T13:23:02.852363",
            "by": "seller",
            "note": "Nhập hàng cho đợt cao điểm"
          },
          {
            "status": "UNDER_REVIEW",
            "at": "2026-09-21T13:23:02.865569",
            "by": "admin",
            "note": ""
          },
          {
            "status": "APPROVED",
            "at": "2026-09-21T13:23:02.868315",
            "by": "admin",
            "note": ""
          },
          {
            "status": "DISBURSED",
            "at": "2026-09-21T13:23:02.875428",
            "by": "admin",
            "note": ""
          }
        ]
      }
    ]
  },
  "onboardingSchema": {
    "currency": "VND",
    "blocks": [
      {
        "key": "seller",
        "title": "Thông tin gian hàng",
        "help": "Bảng cân đối rút gọn của shop. Một dòng.",
        "repeat": false,
        "min_rows": 1,
        "file": "seller.csv",
        "sheet": "seller",
        "fields": [
          {
            "name": "seller_id",
            "label": "Mã gian hàng",
            "type": "text",
            "required": true,
            "help": "Chữ, số, _ hoặc -. Không dấu cách, không dấu tiếng Việt.",
            "placeholder": "",
            "min": null,
            "max": null
          },
          {
            "name": "display_name",
            "label": "Tên gian hàng",
            "type": "text",
            "required": true,
            "help": "Tên hiển thị, có dấu thoải mái.",
            "placeholder": "",
            "min": null,
            "max": null
          },
          {
            "name": "currency",
            "label": "Đơn vị tiền",
            "type": "text",
            "required": false,
            "help": "Mặc định VND. Mọi số tiền cùng đơn vị này.",
            "placeholder": "",
            "min": null,
            "max": null
          },
          {
            "name": "cash_balance",
            "label": "Tiền mặt hiện có",
            "type": "money",
            "required": true,
            "help": "Hệ thống luôn giữ lại một mức tiền mặt tối thiểu, chỉ dùng phần dư.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "available_bank_credit",
            "label": "Tổng hạn mức ngân hàng",
            "type": "money",
            "required": true,
            "help": "Trần cho mọi khoản vay đề xuất.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "current_inventory_value",
            "label": "Giá trị tồn kho",
            "type": "money",
            "required": true,
            "help": "Dùng để báo cáo.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "avg_daily_sales",
            "label": "Doanh thu trung bình/ngày",
            "type": "money",
            "required": true,
            "help": "Là DOANH THU, không phải số lượng. Để 0 sẽ cho hạn mức bằng 0.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "pending_marketplace_payout",
            "label": "Tiền sàn sắp trả",
            "type": "money",
            "required": true,
            "help": "Cộng vào tử số thanh khoản khi chấm rủi ro.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "supplier_payables",
            "label": "Công nợ nhà cung cấp",
            "type": "money",
            "required": true,
            "help": "Vừa là nợ ngắn hạn, vừa trừ vào hạn mức NCC còn lại.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "open_loan_balance",
            "label": "Dư nợ vay hiện tại",
            "type": "money",
            "required": true,
            "help": "Trừ vào hạn mức ngân hàng còn lại.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "expected_payout_date",
            "label": "Ngày dự kiến sàn trả",
            "type": "date",
            "required": false,
            "help": "YYYY-MM-DD. Trễ quá ngưỡng sẽ bị giám sát cảnh báo.",
            "placeholder": "",
            "min": null,
            "max": null
          }
        ]
      },
      {
        "key": "inventory",
        "title": "Tồn kho theo SKU",
        "help": "Mỗi mã hàng một dòng.",
        "repeat": true,
        "min_rows": 1,
        "file": "inventory.csv",
        "sheet": "inventory",
        "fields": [
          {
            "name": "sku",
            "label": "Mã hàng (SKU)",
            "type": "sku",
            "required": true,
            "help": "Phải xuất hiện trong lịch sử bán.",
            "placeholder": "",
            "min": null,
            "max": null
          },
          {
            "name": "on_hand",
            "label": "Tồn kho hiện tại",
            "type": "integer",
            "required": true,
            "help": "Số lượng đang có.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "avg_daily_units",
            "label": "Số lượng bán/ngày",
            "type": "number",
            "required": true,
            "help": "Chỉ dùng dự phòng khi thiếu lịch sử.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "unit_cost",
            "label": "Giá vốn / giá nhập",
            "type": "money",
            "required": true,
            "help": "Không phải giá bán.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "supplier_lead_time_days",
            "label": "Số ngày NCC giao hàng",
            "type": "integer",
            "required": true,
            "help": "Quyết định điểm đặt hàng và mức khẩn cấp.",
            "placeholder": "",
            "min": 0.0,
            "max": 180.0
          }
        ]
      },
      {
        "key": "sales_history",
        "title": "Lịch sử bán",
        "help": "Mỗi SKU mỗi ngày một dòng. Tối thiểu 14 ngày, nên có 30 ngày.",
        "repeat": true,
        "min_rows": 14,
        "file": "sales_history.csv",
        "sheet": "sales_history",
        "fields": [
          {
            "name": "sku",
            "label": "Mã hàng (SKU)",
            "type": "sku",
            "required": true,
            "help": "Khớp với phần tồn kho.",
            "placeholder": "",
            "min": null,
            "max": null
          },
          {
            "name": "order_date",
            "label": "Ngày",
            "type": "date",
            "required": true,
            "help": "YYYY-MM-DD, mỗi SKU mỗi ngày một dòng.",
            "placeholder": "",
            "min": null,
            "max": null
          },
          {
            "name": "units",
            "label": "Số lượng bán",
            "type": "integer",
            "required": true,
            "help": "Ngày không bán ghi 0.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "unit_price",
            "label": "Giá bán",
            "type": "money",
            "required": true,
            "help": "Để tính doanh thu dự kiến.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          }
        ]
      },
      {
        "key": "supplier_terms",
        "title": "Điều khoản nhà cung cấp",
        "help": "Để so sánh với vay ngân hàng. Một dòng.",
        "repeat": false,
        "min_rows": 1,
        "file": "supplier_terms.csv",
        "sheet": "supplier_terms",
        "fields": [
          {
            "name": "supplier_id",
            "label": "Mã nhà cung cấp",
            "type": "text",
            "required": true,
            "help": "",
            "placeholder": "",
            "min": null,
            "max": null
          },
          {
            "name": "credit_limit",
            "label": "Hạn mức công nợ",
            "type": "money",
            "required": true,
            "help": "Còn lại = hạn mức trừ công nợ đang nợ.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "credit_days",
            "label": "Số ngày được nợ",
            "type": "integer",
            "required": true,
            "help": "",
            "placeholder": "",
            "min": 0.0,
            "max": 365.0
          },
          {
            "name": "lead_time_days",
            "label": "Thời gian giao (ngày)",
            "type": "integer",
            "required": true,
            "help": "",
            "placeholder": "",
            "min": 0.0,
            "max": 180.0
          },
          {
            "name": "fee_rate",
            "label": "Phí trọn kỳ",
            "type": "rate",
            "required": true,
            "help": "Phí cho CẢ kỳ công nợ, không phải theo năm. 0,5% ghi là 0.005.",
            "placeholder": "",
            "min": 0.0,
            "max": 1.0
          }
        ]
      },
      {
        "key": "bank_facility",
        "title": "Hạn mức ngân hàng",
        "help": "Chi phí vay. Một dòng.",
        "repeat": false,
        "min_rows": 1,
        "file": "bank_facility.csv",
        "sheet": "bank_facility",
        "fields": [
          {
            "name": "bank_id",
            "label": "Mã ngân hàng",
            "type": "text",
            "required": true,
            "help": "",
            "placeholder": "",
            "min": null,
            "max": null
          },
          {
            "name": "available_credit",
            "label": "Hạn mức tín dụng",
            "type": "money",
            "required": true,
            "help": "Optimizer lấy số này, không lấy số khai ở khối gian hàng.",
            "placeholder": "",
            "min": 0.0,
            "max": null
          },
          {
            "name": "annual_interest_rate",
            "label": "Lãi suất năm",
            "type": "rate",
            "required": true,
            "help": "Theo NĂM, dạng thập phân. 12%/năm ghi là 0.12.",
            "placeholder": "",
            "min": 0.0,
            "max": 1.0
          },
          {
            "name": "min_tenor_days",
            "label": "Kỳ hạn tối thiểu (ngày)",
            "type": "integer",
            "required": true,
            "help": "",
            "placeholder": "",
            "min": 0.0,
            "max": 365.0
          },
          {
            "name": "disbursement_fee_rate",
            "label": "Phí giải ngân",
            "type": "rate",
            "required": false,
            "help": "Không có thì để 0.",
            "placeholder": "",
            "min": 0.0,
            "max": 1.0
          }
        ]
      }
    ]
  },
  "previewFor": {
    "as_of": "2026-09-20",
    "currency": "VND",
    "horizon_days": 30,
    "funding_need": 36260000.0,
    "expected_sales": 435021964.29,
    "forecast_confidence": 0.9124,
    "pd": 0.02915,
    "risk_band": "LOW",
    "risk_score": 0.901429,
    "recommended_limit": 150000000.0,
    "interest_rate": 0.112,
    "funding_plan": [
      {
        "source": "cash",
        "label": "Tiền mặt",
        "amount": 36260000.0,
        "cost": 0.0,
        "rate": 0.0
      }
    ],
    "total_cost": 0.0,
    "funding_capacity": 253000000.0,
    "shortfall": 0.0,
    "feasible": true,
    "policy": {
      "decision": "APPROVE",
      "approved": true,
      "requires_human_approval": false,
      "reasons": [
        "WITHIN_LIMITS"
      ],
      "max_executable_amount": 36260000.0
    },
    "metrics": {
      "days_of_cover": 3.02,
      "leverage_ratio": 0.028571,
      "liquidity_ratio": 10.416667,
      "inventory_value": 70000000.0,
      "avg_daily_sales": 14000000.0,
      "sku_count": 2,
      "history_days": 30
    },
    "sku_plan": [
      {
        "sku": "AT-DAM-01",
        "forecast_daily_units": 19.8786,
        "on_hand": 60,
        "lead_time_days": 5,
        "safety_stock_days": 3,
        "required_units": 160,
        "reorder_units": 100,
        "unit_cost": 185000.0,
        "reorder_cost": 18500000.0,
        "days_of_cover": 3.0183
      },
      {
        "sku": "AT-AOSM-02",
        "forecast_daily_units": 15.4375,
        "on_hand": 50,
        "lead_time_days": 5,
        "safety_stock_days": 3,
        "required_units": 124,
        "reorder_units": 74,
        "unit_cost": 240000.0,
        "reorder_cost": 17760000.0,
        "days_of_cover": 3.2389
      }
    ]
  },
  "portfolio": {
    "generated_at": "2026-09-21T13:23:25.600919",
    "currency": "VND",
    "alliance": {
      "lead": {
        "bank_id": "webank",
        "name": "WeBank",
        "short": "WeB",
        "role": "Chủ liên minh",
        "lead": true,
        "color": "#5b8cff",
        "committed_capital": 4000000000.0,
        "deployed": 0.0,
        "remaining": 4000000000.0,
        "utilization": 0.0,
        "seller_count": 2,
        "avg_rate": 0.1365,
        "avg_pd": 0.070816
      },
      "members": [
        {
          "bank_id": "webank",
          "name": "WeBank",
          "short": "WeB",
          "role": "Chủ liên minh",
          "lead": true,
          "color": "#5b8cff",
          "committed_capital": 4000000000.0,
          "deployed": 0.0,
          "remaining": 4000000000.0,
          "utilization": 0.0,
          "seller_count": 2,
          "avg_rate": 0.1365,
          "avg_pd": 0.070816
        },
        {
          "bank_id": "vcb",
          "name": "Vietcombank",
          "short": "VCB",
          "role": "Đồng minh",
          "lead": false,
          "color": "#12a05c",
          "committed_capital": 5000000000.0,
          "deployed": 137120000.0,
          "remaining": 4862880000.0,
          "utilization": 0.027424,
          "seller_count": 2,
          "avg_rate": 0.116,
          "avg_pd": 0.073124
        },
        {
          "bank_id": "tpb",
          "name": "TPBank",
          "short": "TPB",
          "role": "Đồng minh",
          "lead": false,
          "color": "#8b5cf6",
          "committed_capital": 3000000000.0,
          "deployed": 343390000.0,
          "remaining": 2656610000.0,
          "utilization": 0.114463,
          "seller_count": 2,
          "avg_rate": 0.12,
          "avg_pd": 0.103529
        },
        {
          "bank_id": "tcb",
          "name": "Techcombank",
          "short": "TCB",
          "role": "Đồng minh",
          "lead": false,
          "color": "#e0453b",
          "committed_capital": 3500000000.0,
          "deployed": 0.0,
          "remaining": 3500000000.0,
          "utilization": 0.0,
          "seller_count": 2,
          "avg_rate": 0.15,
          "avg_pd": 0.14874
        }
      ],
      "totals": {
        "committed": 15500000000.0,
        "deployed": 480510000.0,
        "remaining": 15019490000.0,
        "utilization": 0.031001
      }
    },
    "kpi": {
      "sellers": 8,
      "projects": 4,
      "conversations": 4,
      "workflows": 8,
      "applications_pending": 1,
      "applications_total": 2,
      "approval_rate": 1.0,
      "total_disbursed": 480510000.0,
      "exposure": 1055510000.0,
      "avg_pd": 0.099052,
      "avg_decision_seconds": 8.23,
      "auto_approved_share": 0.0
    },
    "risk_distribution": [
      {
        "band": "LOW",
        "count": 2,
        "exposure": 22000000.0,
        "color": "#3ecf8e"
      },
      {
        "band": "MEDIUM",
        "count": 1,
        "exposure": 52000000.0,
        "color": "#e8b339"
      },
      {
        "band": "HIGH",
        "count": 5,
        "exposure": 981510000.0,
        "color": "#e0453b"
      }
    ],
    "funding_mix": [
      {
        "source": "supplier",
        "label": "Tín dụng NCC",
        "amount": 67000000.0,
        "share": 0.362329
      },
      {
        "source": "cash",
        "label": "Tiền mặt",
        "amount": 66260000.0,
        "share": 0.358327
      },
      {
        "source": "loan",
        "label": "Vay ngân hàng",
        "amount": 51655000.0,
        "share": 0.279345
      }
    ],
    "daily": [
      {
        "date": "2026-09-08",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-09",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-10",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-11",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-12",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-13",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-14",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-15",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-16",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-17",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-18",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-19",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-20",
        "workflows": 0,
        "disbursed": 0.0,
        "applications": 0
      },
      {
        "date": "2026-09-21",
        "workflows": 8.0,
        "disbursed": 480510000.0,
        "applications": 2.0
      }
    ],
    "watchlist": [
      {
        "seller_id": "seller_demo_003",
        "display_name": "Thoi Trang Ha My",
        "reason": "RISK_HIGH",
        "detail": "Nhóm rủi ro HIGH, PD 23.40%",
        "severity": "HIGH",
        "pd": 0.233969,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "shop_d_linhkien",
        "display_name": "Linh Kiện Đức Minh",
        "reason": "RISK_HIGH",
        "detail": "Nhóm rủi ro HIGH, PD 13.58%",
        "severity": "HIGH",
        "pd": 0.135815,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "shop_d_linhkien",
        "display_name": "Linh Kiện Đức Minh",
        "reason": "OVER_LIMIT",
        "detail": "Dư nợ 215.000.000 vượt hạn mức đề xuất 15.000.000",
        "severity": "HIGH",
        "pd": 0.135815,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "seller_demo_001",
        "display_name": "Nha Sach Minh Anh",
        "reason": "RISK_HIGH",
        "detail": "Nhóm rủi ro HIGH, PD 11.71%",
        "severity": "HIGH",
        "pd": 0.117097,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "seller_demo_001",
        "display_name": "Nha Sach Minh Anh",
        "reason": "OVER_LIMIT",
        "detail": "Dư nợ 152.120.000 vượt hạn mức đề xuất 46.000.000",
        "severity": "HIGH",
        "pd": 0.117097,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "seller_demo_004",
        "display_name": "My Pham Lan Chi",
        "reason": "RISK_HIGH",
        "detail": "Nhóm rủi ro HIGH, PD 11.39%",
        "severity": "HIGH",
        "pd": 0.113949,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "seller_demo_004",
        "display_name": "My Pham Lan Chi",
        "reason": "OVER_LIMIT",
        "detail": "Dư nợ 237.850.000 vượt hạn mức đề xuất 70.000.000",
        "severity": "HIGH",
        "pd": 0.113949,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "shop_b_mympham",
        "display_name": "Mỹ Phẩm Hà Linh",
        "reason": "RISK_HIGH",
        "detail": "Nhóm rủi ro HIGH, PD 9.31%",
        "severity": "HIGH",
        "pd": 0.093109,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "seller_demo_003",
        "display_name": "Thoi Trang Ha My",
        "reason": "LEVERAGE",
        "detail": "Đòn bẩy 2.25× doanh thu tháng",
        "severity": "MEDIUM",
        "pd": 0.233969,
        "risk_band": "HIGH"
      },
      {
        "seller_id": "shop_c_taphoa",
        "display_name": "Tạp Hóa Cô Ba",
        "reason": "STOCKOUT_SOON",
        "detail": "Tồn kho chỉ còn 4.5 ngày bán",
        "severity": "MEDIUM",
        "pd": 0.063511,
        "risk_band": "MEDIUM"
      },
      {
        "seller_id": "shop_a_thoitrang",
        "display_name": "Thời Trang Anh Thư",
        "reason": "STOCKOUT_SOON",
        "detail": "Tồn kho chỉ còn 3.0 ngày bán",
        "severity": "MEDIUM",
        "pd": 0.02915,
        "risk_band": "LOW"
      }
    ],
    "model_health": {
      "provider": "gemini",
      "configured_model": "gemini-3.8-flash",
      "active_model": "gemini-3.1-flash-lite",
      "last_answered_by": "gemini-3.1-flash-lite",
      "available": true,
      "chain": [
        {
          "model": "gemini-3.8-flash",
          "role": "primary",
          "state": "PARKED",
          "cooldown_seconds_remaining": 821.1
        },
        {
          "model": "gemini-3.7-flash",
          "role": "fallback",
          "state": "PARKED",
          "cooldown_seconds_remaining": 825.4
        },
        {
          "model": "gemini-3.6-flash",
          "role": "fallback",
          "state": "PARKED",
          "cooldown_seconds_remaining": 15.4
        },
        {
          "model": "gemini-3-flash-preview",
          "role": "fallback",
          "state": "PARKED",
          "cooldown_seconds_remaining": 855.8
        },
        {
          "model": "gemini-3.1-flash-lite",
          "role": "fallback",
          "state": "ACTIVE",
          "cooldown_seconds_remaining": 0.0
        },
        {
          "model": "gemini-flash-latest",
          "role": "fallback",
          "state": "AVAILABLE",
          "cooldown_seconds_remaining": 0.0
        }
      ],
      "degraded": false
    }
  },
  "adminSellers": [
    {
      "seller_id": "seller_demo_001",
      "display_name": "Nha Sach Minh Anh",
      "currency": "VND",
      "project_id": null,
      "project_name": null,
      "bank_id": "vcb",
      "interest_rate": 0.12,
      "recommended_limit": 46000000.0,
      "funding_need": null,
      "last_active_at": null,
      "cash_balance": 30000000.0,
      "open_loan_balance": 102120000.0,
      "supplier_payables": 50000000.0,
      "current_inventory_value": 227120000.0,
      "avg_daily_sales": 18000000.0,
      "exposure": 152120000.0,
      "risk_band": "HIGH",
      "pd": 0.117097,
      "recommended_credit_limit": 46000000.0,
      "workflow_count": 1,
      "action_count": 1,
      "actions_by_status": {
        "EXECUTED": 1
      },
      "awaiting_approval": 0,
      "total_executed": 137120000.0,
      "latest_workflow_id": "wf_e255ea46d47f4200",
      "latest_status": "WAITING_APPROVAL",
      "latest_at": "2026-09-21T13:23:10.012436"
    },
    {
      "seller_id": "seller_demo_002",
      "display_name": "Dien May Tuan Phat",
      "currency": "VND",
      "project_id": null,
      "project_name": null,
      "bank_id": "webank",
      "interest_rate": 0.105,
      "recommended_limit": 300000000.0,
      "funding_need": null,
      "last_active_at": null,
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
      "latest_workflow_id": "wf_ab7c004d0e534c26",
      "latest_status": "NO_ACTION_NEEDED",
      "latest_at": "2026-09-21T13:23:14.879789"
    },
    {
      "seller_id": "seller_demo_003",
      "display_name": "Thoi Trang Ha My",
      "currency": "VND",
      "project_id": null,
      "project_name": null,
      "bank_id": "tcb",
      "interest_rate": 0.155,
      "recommended_limit": 0.0,
      "funding_need": null,
      "last_active_at": null,
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
      "latest_workflow_id": "wf_24da030f648f4d48",
      "latest_status": "POLICY_REJECTED",
      "latest_at": "2026-09-21T13:23:18.617439"
    },
    {
      "seller_id": "seller_demo_004",
      "display_name": "My Pham Lan Chi",
      "currency": "VND",
      "project_id": null,
      "project_name": null,
      "bank_id": "tpb",
      "interest_rate": 0.115,
      "recommended_limit": 70000000.0,
      "funding_need": null,
      "last_active_at": null,
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
      "latest_workflow_id": "wf_3a2010710eab4053",
      "latest_status": "WAITING_APPROVAL",
      "latest_at": "2026-09-21T13:23:25.553288"
    },
    {
      "seller_id": "shop_a_thoitrang",
      "display_name": "Thời Trang Anh Thư",
      "currency": "VND",
      "project_id": "prj_6d53fdcee7494f9f",
      "project_name": "Thời Trang Anh Thư",
      "bank_id": "vcb",
      "interest_rate": 0.112,
      "recommended_limit": 150000000.0,
      "funding_need": 36260000.0,
      "last_active_at": "2026-09-21T13:21:52.722946",
      "cash_balance": 85000000.0,
      "open_loan_balance": 0.0,
      "supplier_payables": 12000000.0,
      "current_inventory_value": 70000000.0,
      "avg_daily_sales": 14000000.0,
      "exposure": 12000000.0,
      "risk_band": "LOW",
      "pd": 0.02915,
      "recommended_credit_limit": 150000000.0,
      "workflow_count": 1,
      "action_count": 1,
      "actions_by_status": {
        "PROPOSED": 1
      },
      "awaiting_approval": 0,
      "total_executed": 0.0,
      "latest_workflow_id": "wf_03ef9140cee94ca1",
      "latest_status": "PROPOSAL_CREATED",
      "latest_at": "2026-09-21T13:22:48.569511"
    },
    {
      "seller_id": "shop_b_mympham",
      "display_name": "Mỹ Phẩm Hà Linh",
      "currency": "VND",
      "project_id": "prj_45528d38c35249fc",
      "project_name": "Mỹ Phẩm Hà Linh",
      "bank_id": "tpb",
      "interest_rate": 0.125,
      "recommended_limit": 118000000.0,
      "funding_need": 85540000.0,
      "last_active_at": "2026-09-21T13:22:52.169413",
      "cash_balance": 30000000.0,
      "open_loan_balance": 26540000.0,
      "supplier_payables": 80000000.0,
      "current_inventory_value": 180540000.0,
      "avg_daily_sales": 26000000.0,
      "exposure": 106540000.0,
      "risk_band": "HIGH",
      "pd": 0.093109,
      "recommended_credit_limit": 118000000.0,
      "workflow_count": 1,
      "action_count": 1,
      "actions_by_status": {
        "EXECUTED": 1
      },
      "awaiting_approval": 0,
      "total_executed": 85540000.0,
      "latest_workflow_id": "wf_9289739c49f143e1",
      "latest_status": "WAITING_APPROVAL",
      "latest_at": "2026-09-21T13:22:57.522100"
    },
    {
      "seller_id": "shop_c_taphoa",
      "display_name": "Tạp Hóa Cô Ba",
      "currency": "VND",
      "project_id": "prj_57335cc0204c4de7",
      "project_name": "Tạp Hóa Cô Ba",
      "bank_id": "tcb",
      "interest_rate": 0.145,
      "recommended_limit": 108000000.0,
      "funding_need": 38115000.0,
      "last_active_at": "2026-09-21T13:22:57.546823",
      "cash_balance": 38000000.0,
      "open_loan_balance": 12000000.0,
      "supplier_payables": 40000000.0,
      "current_inventory_value": 48000000.0,
      "avg_daily_sales": 20000000.0,
      "exposure": 52000000.0,
      "risk_band": "MEDIUM",
      "pd": 0.063511,
      "recommended_credit_limit": 108000000.0,
      "workflow_count": 1,
      "action_count": 1,
      "actions_by_status": {
        "AWAITING_APPROVAL": 1
      },
      "awaiting_approval": 1,
      "total_executed": 0.0,
      "latest_workflow_id": "wf_e95c33fa39994f3a",
      "latest_status": "WAITING_APPROVAL",
      "latest_at": "2026-09-21T13:23:02.844006"
    },
    {
      "seller_id": "shop_d_linhkien",
      "display_name": "Linh Kiện Đức Minh",
      "currency": "VND",
      "project_id": "prj_285a8d5f940e4d66",
      "project_name": "Linh Kiện Đức Minh",
      "bank_id": "webank",
      "interest_rate": 0.168,
      "recommended_limit": 15000000.0,
      "funding_need": 66600000.0,
      "last_active_at": "2026-09-21T13:22:48.593204",
      "cash_balance": 18000000.0,
      "open_loan_balance": 75000000.0,
      "supplier_payables": 140000000.0,
      "current_inventory_value": 140000000.0,
      "avg_daily_sales": 18000000.0,
      "exposure": 215000000.0,
      "risk_band": "HIGH",
      "pd": 0.135815,
      "recommended_credit_limit": 15000000.0,
      "workflow_count": 1,
      "action_count": 0,
      "actions_by_status": {},
      "awaiting_approval": 0,
      "total_executed": 0.0,
      "latest_workflow_id": "wf_28cff625554244a4",
      "latest_status": "POLICY_REJECTED",
      "latest_at": "2026-09-21T13:22:52.147559"
    }
  ],
  "sellerProfiles": {
    "seller_demo_001": {
      "seller": {
        "seller_id": "seller_demo_001",
        "display_name": "Nha Sach Minh Anh",
        "cash_balance": 30000000.0,
        "available_bank_credit": 150000000.0,
        "current_inventory_value": 227120000.0,
        "avg_daily_sales": 18000000.0,
        "pending_marketplace_payout": 35000000.0,
        "supplier_payables": 50000000.0,
        "open_loan_balance": 102120000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-23"
      },
      "project": null,
      "scores": {
        "pd": 0.117097,
        "risk_band": "HIGH",
        "risk_score": 0.542461,
        "recommended_limit": 46000000.0,
        "interest_rate": 0.12,
        "funding_need": 0.0,
        "exposure": 152120000.0,
        "deployed": 137120000.0,
        "limit_utilization": 3.306957,
        "days_of_cover": null,
        "leverage_ratio": 0.281704,
        "liquidity_ratio": 0.427294,
        "forecast_confidence": null,
        "bank_id": "vcb",
        "factors": [
          {
            "label": "Thanh khoản",
            "value": 0.427294,
            "detail": "tiền mặt + tiền sàn sắp trả, chia cho nợ ngắn hạn",
            "score": 0.142431,
            "weight": 0.4,
            "direction": "bad"
          },
          {
            "label": "Quy mô doanh thu",
            "value": 540000000.0,
            "detail": "doanh thu tháng so với mốc chuẩn",
            "score": 0.9,
            "weight": 0.3,
            "direction": "good"
          },
          {
            "label": "Đòn bẩy",
            "value": 0.281704,
            "detail": "nợ ngắn hạn chia cho doanh thu tháng",
            "score": 0.718296,
            "weight": 0.3,
            "direction": "good"
          }
        ]
      },
      "inventory": [
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
      ],
      "supplier_terms": {
        "supplier_id": "supplier_001",
        "seller_id": "seller_demo_001",
        "credit_limit": 50000000.0,
        "credit_days": 30,
        "lead_time_days": 7,
        "fee_rate": 0.005
      },
      "bank_facility": {
        "seller_id": "seller_demo_001",
        "bank_id": "vcb",
        "available_credit": 150000000.0,
        "annual_interest_rate": 0.12,
        "min_tenor_days": 30,
        "disbursement_fee_rate": 0.0
      },
      "profile": null,
      "preview": null,
      "applications": [],
      "actions": [
        {
          "action_id": "act_cc721481978f435c",
          "workflow_id": "wf_e255ea46d47f4200",
          "seller_id": "seller_demo_001",
          "action_type": "FINANCING",
          "amount": 137120000.0,
          "status": "EXECUTED",
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
            "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
          },
          "created_at": "2026-09-21T13:23:02.938466",
          "approved_by": "admin",
          "approved_at": "2026-09-21T13:23:10.015460",
          "rejected_by": null,
          "rejected_at": null,
          "executed_at": "2026-09-21T13:23:10.019830",
          "expires_at": "2026-09-21T13:53:02.938192"
        }
      ],
      "workflows": [
        {
          "workflow_id": "wf_e255ea46d47f4200",
          "status": "WAITING_APPROVAL",
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "orchestrator": "deterministic",
          "created_at": "2026-09-21T13:23:02.882020",
          "updated_at": "2026-09-21T13:23:10.012436"
        }
      ],
      "conversations": []
    },
    "seller_demo_002": {
      "seller": {
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
      "project": null,
      "scores": {
        "pd": 0.005817,
        "risk_band": "LOW",
        "risk_score": 0.996667,
        "recommended_limit": 300000000.0,
        "interest_rate": 0.105,
        "funding_need": 0.0,
        "exposure": 10000000.0,
        "deployed": 0.0,
        "limit_utilization": 0.033333,
        "days_of_cover": null,
        "leverage_ratio": 0.011111,
        "liquidity_ratio": 48.0,
        "forecast_confidence": null,
        "bank_id": "webank",
        "factors": [
          {
            "label": "Thanh khoản",
            "value": 48.0,
            "detail": "tiền mặt + tiền sàn sắp trả, chia cho nợ ngắn hạn",
            "score": 1.0,
            "weight": 0.4,
            "direction": "good"
          },
          {
            "label": "Quy mô doanh thu",
            "value": 900000000.0,
            "detail": "doanh thu tháng so với mốc chuẩn",
            "score": 1.0,
            "weight": 0.3,
            "direction": "good"
          },
          {
            "label": "Đòn bẩy",
            "value": 0.011111,
            "detail": "nợ ngắn hạn chia cho doanh thu tháng",
            "score": 0.988889,
            "weight": 0.3,
            "direction": "good"
          }
        ]
      },
      "inventory": [
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
      ],
      "supplier_terms": {
        "supplier_id": "supplier_002",
        "seller_id": "seller_demo_002",
        "credit_limit": 200000000.0,
        "credit_days": 45,
        "lead_time_days": 10,
        "fee_rate": 0.004
      },
      "bank_facility": {
        "seller_id": "seller_demo_002",
        "bank_id": "webank",
        "available_credit": 300000000.0,
        "annual_interest_rate": 0.105,
        "min_tenor_days": 30,
        "disbursement_fee_rate": 0.0
      },
      "profile": null,
      "preview": null,
      "applications": [],
      "actions": [],
      "workflows": [
        {
          "workflow_id": "wf_ab7c004d0e534c26",
          "status": "NO_ACTION_NEEDED",
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "orchestrator": "deterministic",
          "created_at": "2026-09-21T13:23:10.024698",
          "updated_at": "2026-09-21T13:23:14.879789"
        }
      ],
      "conversations": []
    },
    "seller_demo_003": {
      "seller": {
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
      "project": null,
      "scores": {
        "pd": 0.233969,
        "risk_band": "HIGH",
        "risk_score": 0.065432,
        "recommended_limit": 0.0,
        "interest_rate": 0.155,
        "funding_need": 0.0,
        "exposure": 270000000.0,
        "deployed": 0.0,
        "limit_utilization": 0.0,
        "days_of_cover": null,
        "leverage_ratio": 2.25,
        "liquidity_ratio": 0.040741,
        "forecast_confidence": null,
        "bank_id": "tcb",
        "factors": [
          {
            "label": "Thanh khoản",
            "value": 0.040741,
            "detail": "tiền mặt + tiền sàn sắp trả, chia cho nợ ngắn hạn",
            "score": 0.01358,
            "weight": 0.4,
            "direction": "bad"
          },
          {
            "label": "Quy mô doanh thu",
            "value": 120000000.0,
            "detail": "doanh thu tháng so với mốc chuẩn",
            "score": 0.2,
            "weight": 0.3,
            "direction": "bad"
          },
          {
            "label": "Đòn bẩy",
            "value": 2.25,
            "detail": "nợ ngắn hạn chia cho doanh thu tháng",
            "score": 0.0,
            "weight": 0.3,
            "direction": "bad"
          }
        ]
      },
      "inventory": [
        {
          "sku": "SKU-DRESS",
          "on_hand": 26,
          "avg_daily_units": 8.0,
          "unit_cost": 260000.0,
          "supplier_lead_time_days": 9
        }
      ],
      "supplier_terms": {
        "supplier_id": "supplier_003",
        "seller_id": "seller_demo_003",
        "credit_limit": 30000000.0,
        "credit_days": 30,
        "lead_time_days": 9,
        "fee_rate": 0.008
      },
      "bank_facility": {
        "seller_id": "seller_demo_003",
        "bank_id": "tcb",
        "available_credit": 60000000.0,
        "annual_interest_rate": 0.155,
        "min_tenor_days": 30,
        "disbursement_fee_rate": 0.0
      },
      "profile": null,
      "preview": null,
      "applications": [],
      "actions": [],
      "workflows": [
        {
          "workflow_id": "wf_24da030f648f4d48",
          "status": "POLICY_REJECTED",
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "orchestrator": "deterministic",
          "created_at": "2026-09-21T13:23:14.882885",
          "updated_at": "2026-09-21T13:23:18.617439"
        }
      ],
      "conversations": []
    },
    "seller_demo_004": {
      "seller": {
        "seller_id": "seller_demo_004",
        "display_name": "My Pham Lan Chi",
        "cash_balance": 30000000.0,
        "available_bank_credit": 250000000.0,
        "current_inventory_value": 407850000.0,
        "avg_daily_sales": 25000000.0,
        "pending_marketplace_payout": 60000000.0,
        "supplier_payables": 120000000.0,
        "open_loan_balance": 117850000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-25"
      },
      "project": null,
      "scores": {
        "pd": 0.113949,
        "risk_band": "HIGH",
        "risk_score": 0.555312,
        "recommended_limit": 70000000.0,
        "interest_rate": 0.115,
        "funding_need": 0.0,
        "exposure": 237850000.0,
        "deployed": 257850000.0,
        "limit_utilization": 3.397857,
        "days_of_cover": null,
        "leverage_ratio": 0.317133,
        "liquidity_ratio": 0.37839,
        "forecast_confidence": null,
        "bank_id": "tpb",
        "factors": [
          {
            "label": "Thanh khoản",
            "value": 0.37839,
            "detail": "tiền mặt + tiền sàn sắp trả, chia cho nợ ngắn hạn",
            "score": 0.12613,
            "weight": 0.4,
            "direction": "bad"
          },
          {
            "label": "Quy mô doanh thu",
            "value": 750000000.0,
            "detail": "doanh thu tháng so với mốc chuẩn",
            "score": 1.0,
            "weight": 0.3,
            "direction": "good"
          },
          {
            "label": "Đòn bẩy",
            "value": 0.317133,
            "detail": "nợ ngắn hạn chia cho doanh thu tháng",
            "score": 0.682867,
            "weight": 0.3,
            "direction": "good"
          }
        ]
      },
      "inventory": [
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
      ],
      "supplier_terms": {
        "supplier_id": "supplier_004",
        "seller_id": "seller_demo_004",
        "credit_limit": 120000000.0,
        "credit_days": 30,
        "lead_time_days": 9,
        "fee_rate": 0.006
      },
      "bank_facility": {
        "seller_id": "seller_demo_004",
        "bank_id": "tpb",
        "available_credit": 250000000.0,
        "annual_interest_rate": 0.115,
        "min_tenor_days": 30,
        "disbursement_fee_rate": 0.0
      },
      "profile": null,
      "preview": null,
      "applications": [],
      "actions": [
        {
          "action_id": "act_0ba3e945960544bc",
          "workflow_id": "wf_3a2010710eab4053",
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
            "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
          },
          "created_at": "2026-09-21T13:23:18.636416",
          "approved_by": "admin",
          "approved_at": "2026-09-21T13:23:25.559364",
          "rejected_by": null,
          "rejected_at": null,
          "executed_at": "2026-09-21T13:23:25.563711",
          "expires_at": "2026-09-21T13:53:18.636131"
        }
      ],
      "workflows": [
        {
          "workflow_id": "wf_3a2010710eab4053",
          "status": "WAITING_APPROVAL",
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "orchestrator": "deterministic",
          "created_at": "2026-09-21T13:23:18.620071",
          "updated_at": "2026-09-21T13:23:25.553288"
        }
      ],
      "conversations": []
    },
    "shop_a_thoitrang": {
      "seller": {
        "seller_id": "shop_a_thoitrang",
        "display_name": "Thời Trang Anh Thư",
        "cash_balance": 85000000.0,
        "available_bank_credit": 150000000.0,
        "current_inventory_value": 70000000.0,
        "avg_daily_sales": 14000000.0,
        "pending_marketplace_payout": 40000000.0,
        "supplier_payables": 12000000.0,
        "open_loan_balance": 0.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-25"
      },
      "project": {
        "project_id": "prj_6d53fdcee7494f9f",
        "owner": "seller",
        "name": "Thời Trang Anh Thư",
        "seller_id": "shop_a_thoitrang",
        "currency": "VND",
        "status": "ACTIVE",
        "source": "form",
        "created_at": "2026-09-21T13:21:52.722940",
        "updated_at": "2026-09-21T13:21:52.722946",
        "profile_status": "OK",
        "warning_count": 0,
        "conversation_count": 1,
        "message_count": 2,
        "last_message_at": "2026-09-21T13:22:48.570427",
        "funding_status": "SUBMITTED",
        "application_id": "app_5a34d4fefed64105",
        "funding_need": 36260000.0,
        "risk_band": "LOW",
        "pd": 0.02915,
        "recommended_limit": 150000000.0
      },
      "scores": {
        "pd": 0.02915,
        "risk_band": "LOW",
        "risk_score": 0.901429,
        "recommended_limit": 150000000.0,
        "interest_rate": 0.112,
        "funding_need": 36260000.0,
        "exposure": 12000000.0,
        "deployed": 0.0,
        "limit_utilization": 0.08,
        "days_of_cover": 3.02,
        "leverage_ratio": 0.028571,
        "liquidity_ratio": 10.416667,
        "forecast_confidence": 0.9124,
        "bank_id": "vcb",
        "factors": [
          {
            "label": "Thanh khoản",
            "value": 10.416667,
            "detail": "tiền mặt + tiền sàn sắp trả, chia cho nợ ngắn hạn",
            "score": 1.0,
            "weight": 0.4,
            "direction": "good"
          },
          {
            "label": "Quy mô doanh thu",
            "value": 420000000.0,
            "detail": "doanh thu tháng so với mốc chuẩn",
            "score": 0.7,
            "weight": 0.3,
            "direction": "good"
          },
          {
            "label": "Đòn bẩy",
            "value": 0.028571,
            "detail": "nợ ngắn hạn chia cho doanh thu tháng",
            "score": 0.971429,
            "weight": 0.3,
            "direction": "good"
          }
        ]
      },
      "inventory": [
        {
          "sku": "AT-DAM-01",
          "on_hand": 60,
          "avg_daily_units": 19.0,
          "unit_cost": 185000.0,
          "supplier_lead_time_days": 5
        },
        {
          "sku": "AT-AOSM-02",
          "on_hand": 50,
          "avg_daily_units": 15.0,
          "unit_cost": 240000.0,
          "supplier_lead_time_days": 5
        }
      ],
      "supplier_terms": {
        "supplier_id": "ncc_a_01",
        "seller_id": "shop_a_thoitrang",
        "credit_limit": 60000000.0,
        "credit_days": 30,
        "lead_time_days": 5,
        "fee_rate": 0.005
      },
      "bank_facility": {
        "seller_id": "shop_a_thoitrang",
        "bank_id": "vcb",
        "available_credit": 150000000.0,
        "annual_interest_rate": 0.112,
        "min_tenor_days": 30,
        "disbursement_fee_rate": 0.0
      },
      "profile": {
        "seller": {
          "seller_id": "shop_a_thoitrang",
          "display_name": "Thời Trang Anh Thư",
          "currency": "VND",
          "cash_balance": 85000000.0,
          "available_bank_credit": 150000000.0,
          "current_inventory_value": 70000000.0,
          "avg_daily_sales": 14000000.0,
          "pending_marketplace_payout": 40000000.0,
          "supplier_payables": 12000000.0,
          "open_loan_balance": 0.0,
          "expected_payout_date": "2026-09-25"
        },
        "inventory": [
          {
            "sku": "AT-DAM-01",
            "on_hand": 60,
            "avg_daily_units": 19.0,
            "unit_cost": 185000.0,
            "supplier_lead_time_days": 5
          },
          {
            "sku": "AT-AOSM-02",
            "on_hand": 50,
            "avg_daily_units": 15.0,
            "unit_cost": 240000.0,
            "supplier_lead_time_days": 5
          }
        ],
        "sales_history": [
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-22",
            "units": 15,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-22",
            "units": 19,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-23",
            "units": 16,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-23",
            "units": 19,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-24",
            "units": 16,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-24",
            "units": 22,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-25",
            "units": 13,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-25",
            "units": 19,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-26",
            "units": 13,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-26",
            "units": 19,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-27",
            "units": 15,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-27",
            "units": 20,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-28",
            "units": 14,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-28",
            "units": 17,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-29",
            "units": 17,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-29",
            "units": 20,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-30",
            "units": 16,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-30",
            "units": 20,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-08-31",
            "units": 16,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-08-31",
            "units": 21,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-01",
            "units": 16,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-01",
            "units": 17,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-02",
            "units": 16,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-02",
            "units": 18,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-03",
            "units": 14,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-03",
            "units": 17,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-04",
            "units": 15,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-04",
            "units": 22,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-05",
            "units": 14,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-05",
            "units": 21,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-06",
            "units": 17,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-06",
            "units": 17,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-07",
            "units": 13,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-07",
            "units": 23,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-08",
            "units": 17,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-08",
            "units": 23,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-09",
            "units": 13,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-09",
            "units": 21,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-10",
            "units": 16,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-10",
            "units": 21,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-11",
            "units": 15,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-11",
            "units": 18,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-12",
            "units": 15,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-12",
            "units": 17,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-13",
            "units": 17,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-13",
            "units": 21,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-14",
            "units": 13,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-14",
            "units": 18,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-15",
            "units": 13,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-15",
            "units": 19,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-16",
            "units": 18,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-16",
            "units": 19,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-17",
            "units": 16,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-17",
            "units": 18,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-18",
            "units": 14,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-18",
            "units": 21,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-19",
            "units": 18,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-19",
            "units": 20,
            "unit_price": 380000.0
          },
          {
            "sku": "AT-AOSM-02",
            "order_date": "2026-09-20",
            "units": 18,
            "unit_price": 450000.0
          },
          {
            "sku": "AT-DAM-01",
            "order_date": "2026-09-20",
            "units": 23,
            "unit_price": 380000.0
          }
        ],
        "supplier_terms": {
          "supplier_id": "ncc_a_01",
          "credit_limit": 60000000.0,
          "credit_days": 30,
          "lead_time_days": 5,
          "fee_rate": 0.005
        },
        "bank_facility": {
          "bank_id": "vcb",
          "available_credit": 150000000.0,
          "annual_interest_rate": 0.112,
          "min_tenor_days": 30,
          "disbursement_fee_rate": 0.0
        }
      },
      "preview": {
        "as_of": "2026-09-20",
        "currency": "VND",
        "horizon_days": 30,
        "funding_need": 36260000.0,
        "expected_sales": 435021964.29,
        "forecast_confidence": 0.9124,
        "pd": 0.02915,
        "risk_band": "LOW",
        "risk_score": 0.901429,
        "recommended_limit": 150000000.0,
        "interest_rate": 0.112,
        "funding_plan": [
          {
            "source": "cash",
            "label": "Tiền mặt",
            "amount": 36260000.0,
            "cost": 0.0,
            "rate": 0.0
          }
        ],
        "total_cost": 0.0,
        "funding_capacity": 253000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "policy": {
          "decision": "APPROVE",
          "approved": true,
          "requires_human_approval": false,
          "reasons": [
            "WITHIN_LIMITS"
          ],
          "max_executable_amount": 36260000.0
        },
        "metrics": {
          "days_of_cover": 3.02,
          "leverage_ratio": 0.028571,
          "liquidity_ratio": 10.416667,
          "inventory_value": 70000000.0,
          "avg_daily_sales": 14000000.0,
          "sku_count": 2,
          "history_days": 30
        },
        "sku_plan": [
          {
            "sku": "AT-DAM-01",
            "forecast_daily_units": 19.8786,
            "on_hand": 60,
            "lead_time_days": 5,
            "safety_stock_days": 3,
            "required_units": 160,
            "reorder_units": 100,
            "unit_cost": 185000.0,
            "reorder_cost": 18500000.0,
            "days_of_cover": 3.0183
          },
          {
            "sku": "AT-AOSM-02",
            "forecast_daily_units": 15.4375,
            "on_hand": 50,
            "lead_time_days": 5,
            "safety_stock_days": 3,
            "required_units": 124,
            "reorder_units": 74,
            "unit_cost": 240000.0,
            "reorder_cost": 17760000.0,
            "days_of_cover": 3.2389
          }
        ]
      },
      "applications": [
        {
          "application_id": "app_5a34d4fefed64105",
          "project_id": "prj_6d53fdcee7494f9f",
          "seller_id": "shop_a_thoitrang",
          "seller_name": "Thời Trang Anh Thư",
          "amount": 36260000.0,
          "currency": "VND",
          "status": "SUBMITTED",
          "action_id": null,
          "bank_id": "vcb",
          "note": "Chờ thẩm định",
          "pd": 0.02915,
          "risk_band": "LOW",
          "recommended_limit": 150000000.0,
          "interest_rate": 0.112,
          "funding_plan": [
            {
              "source": "cash",
              "label": "Tiền mặt",
              "amount": 36260000.0,
              "cost": 0.0,
              "rate": 0.0
            }
          ],
          "submitted_at": "2026-09-21T13:23:02.877694",
          "decided_at": null,
          "decided_by": null,
          "timeline": [
            {
              "status": "SUBMITTED",
              "at": "2026-09-21T13:23:02.877694",
              "by": "seller",
              "note": "Chờ thẩm định"
            }
          ]
        }
      ],
      "actions": [
        {
          "action_id": "act_624fe049d17e4a16",
          "workflow_id": "wf_03ef9140cee94ca1",
          "seller_id": "shop_a_thoitrang",
          "action_type": "FINANCING",
          "amount": 36260000.0,
          "status": "PROPOSED",
          "policy_decision": {
            "approved": true,
            "requires_human_approval": false,
            "reasons": [
              "WITHIN_LIMITS"
            ],
            "max_executable_amount": 36260000.0,
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
              "seller_id": "shop_a_thoitrang",
              "total_need": 36260000.0,
              "cash_amount": 36260000.0,
              "supplier_credit_amount": 0.0,
              "loan_amount": 0.0,
              "estimated_financing_cost": 0.0,
              "funding_date": "2026-09-20",
              "rationale_codes": [
                "CASH_USED_ABOVE_MIN_RESERVE",
                "FULLY_FUNDED",
                "SUPPLIER_LINE_PARTIALLY_UTILISED",
                "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
              ],
              "funding_capacity": 253000000.0,
              "shortfall": 0.0,
              "feasible": true,
              "cost_breakdown": {
                "cash": 0.0,
                "supplier_credit": 0.0,
                "loan": 0.0,
                "tenor_days": 30.0,
                "loan_cost_rate": 0.009205,
                "supplier_cost_rate": 0.005,
                "cash_capacity": 55000000.0,
                "supplier_capacity": 48000000.0,
                "loan_capacity": 150000000.0
              },
              "engine_version": "greedy-optimizer-v1"
            },
            "forecast": {
              "seller_id": "shop_a_thoitrang",
              "horizon_days": 30,
              "expected_sales": 435021964.29,
              "required_inventory_cost": 36260000.0,
              "projected_stockout_days": 3.0183,
              "confidence": 0.9124,
              "engine_version": "mock-forecast-v1",
              "sku_plan": [
                {
                  "sku": "AT-DAM-01",
                  "forecast_daily_units": 19.8786,
                  "on_hand": 60,
                  "lead_time_days": 5,
                  "safety_stock_days": 3,
                  "required_units": 160,
                  "reorder_units": 100,
                  "unit_cost": 185000.0,
                  "reorder_cost": 18500000.0,
                  "days_of_cover": 3.0183
                },
                {
                  "sku": "AT-AOSM-02",
                  "forecast_daily_units": 15.4375,
                  "on_hand": 50,
                  "lead_time_days": 5,
                  "safety_stock_days": 3,
                  "required_units": 124,
                  "reorder_units": 74,
                  "unit_cost": 240000.0,
                  "reorder_cost": 17760000.0,
                  "days_of_cover": 3.2389
                }
              ]
            },
            "risk": {
              "seller_id": "shop_a_thoitrang",
              "pd": 0.02915,
              "liquidity_score": 1.0,
              "risk_score": 0.901429,
              "recommended_limit": 150000000.0,
              "risk_band": "LOW",
              "engine_version": "mock-risk-v1",
              "factors": {
                "liquidity_ratio": 10.416667,
                "liquidity_score": 1.0,
                "sales_factor": 0.7,
                "leverage_ratio": 0.028571,
                "leverage_factor": 0.971429,
                "monthly_sales": 420000000.0,
                "bank_headroom": 150000000.0,
                "raw_limit_before_cap": 169190000.0
              }
            },
            "supplier_terms": {
              "supplier_id": "ncc_a_01",
              "seller_id": "shop_a_thoitrang",
              "credit_limit": 60000000.0,
              "credit_days": 30,
              "lead_time_days": 5,
              "fee_rate": 0.005
            },
            "repayment_schedule": [],
            "facts": {
              "currency": "VND",
              "cash_balance": 85000000.0,
              "pending_marketplace_payout": 40000000.0,
              "open_loan_balance": 0.0,
              "supplier_payables": 12000000.0,
              "horizon_days": 30,
              "expected_sales": 435021964.29,
              "required_inventory_cost": 36260000.0,
              "projected_stockout_days": 3.0183,
              "forecast_confidence": 0.9124,
              "pd": 0.02915,
              "risk_band": "LOW",
              "risk_score": 0.901429,
              "liquidity_score": 1.0,
              "recommended_credit_limit": 150000000.0,
              "risk_engine_version": "mock-risk-v1",
              "capital_need": 36260000.0,
              "cash_amount": 36260000.0,
              "supplier_credit_amount": 0.0,
              "loan_amount": 0.0,
              "estimated_financing_cost": 0.0,
              "funding_date": "2026-09-20",
              "rationale_codes": [
                "CASH_USED_ABOVE_MIN_RESERVE",
                "FULLY_FUNDED",
                "SUPPLIER_LINE_PARTIALLY_UTILISED",
                "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
              ],
              "policy_approved": true,
              "requires_human_approval": false,
              "policy_reasons": [
                "WITHIN_LIMITS"
              ],
              "max_executable_amount": 36260000.0
            },
            "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
          },
          "created_at": "2026-09-21T13:21:52.760320",
          "approved_by": null,
          "approved_at": null,
          "rejected_by": null,
          "rejected_at": null,
          "executed_at": null,
          "expires_at": "2026-09-21T13:51:52.759399"
        }
      ],
      "workflows": [
        {
          "workflow_id": "wf_03ef9140cee94ca1",
          "status": "PROPOSAL_CREATED",
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "orchestrator": "deterministic",
          "created_at": "2026-09-21T13:21:52.738940",
          "updated_at": "2026-09-21T13:22:48.569511"
        }
      ],
      "conversations": [
        {
          "conversation_id": "cnv_77c3d862db68499e",
          "project_id": "prj_6d53fdcee7494f9f",
          "title": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "message_count": 2,
          "created_at": "2026-09-21T13:21:52.732109",
          "updated_at": "2026-09-21T13:22:48.570550"
        }
      ]
    },
    "shop_b_mympham": {
      "seller": {
        "seller_id": "shop_b_mympham",
        "display_name": "Mỹ Phẩm Hà Linh",
        "cash_balance": 30000000.0,
        "available_bank_credit": 200000000.0,
        "current_inventory_value": 180540000.0,
        "avg_daily_sales": 26000000.0,
        "pending_marketplace_payout": 35000000.0,
        "supplier_payables": 80000000.0,
        "open_loan_balance": 26540000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-26"
      },
      "project": {
        "project_id": "prj_45528d38c35249fc",
        "owner": "seller",
        "name": "Mỹ Phẩm Hà Linh",
        "seller_id": "shop_b_mympham",
        "currency": "VND",
        "status": "ACTIVE",
        "source": "form",
        "created_at": "2026-09-21T13:22:52.169409",
        "updated_at": "2026-09-21T13:22:52.169413",
        "profile_status": "OK",
        "warning_count": 0,
        "conversation_count": 1,
        "message_count": 2,
        "last_message_at": "2026-09-21T13:22:57.523095",
        "funding_status": "DISBURSED",
        "application_id": "app_e4382259f7724621",
        "funding_need": 85540000.0,
        "risk_band": "MEDIUM",
        "pd": 0.040959,
        "recommended_limit": 185000000.0
      },
      "scores": {
        "pd": 0.093109,
        "risk_band": "HIGH",
        "risk_score": 0.64037,
        "recommended_limit": 118000000.0,
        "interest_rate": 0.125,
        "funding_need": 85540000.0,
        "exposure": 106540000.0,
        "deployed": 85540000.0,
        "limit_utilization": 0.902881,
        "days_of_cover": 7.77,
        "leverage_ratio": 0.13659,
        "liquidity_ratio": 0.610099,
        "forecast_confidence": 0.8722,
        "bank_id": "tpb",
        "factors": [
          {
            "label": "Thanh khoản",
            "value": 0.610099,
            "detail": "tiền mặt + tiền sàn sắp trả, chia cho nợ ngắn hạn",
            "score": 0.203366,
            "weight": 0.4,
            "direction": "bad"
          },
          {
            "label": "Quy mô doanh thu",
            "value": 780000000.0,
            "detail": "doanh thu tháng so với mốc chuẩn",
            "score": 1.0,
            "weight": 0.3,
            "direction": "good"
          },
          {
            "label": "Đòn bẩy",
            "value": 0.13659,
            "detail": "nợ ngắn hạn chia cho doanh thu tháng",
            "score": 0.86341,
            "weight": 0.3,
            "direction": "good"
          }
        ]
      },
      "inventory": [
        {
          "sku": "HL-SERUM",
          "on_hand": 170,
          "avg_daily_units": 20.0,
          "unit_cost": 420000.0,
          "supplier_lead_time_days": 9
        },
        {
          "sku": "HL-KEM",
          "on_hand": 130,
          "avg_daily_units": 14.0,
          "unit_cost": 560000.0,
          "supplier_lead_time_days": 11
        }
      ],
      "supplier_terms": {
        "supplier_id": "ncc_b_01",
        "seller_id": "shop_b_mympham",
        "credit_limit": 80000000.0,
        "credit_days": 30,
        "lead_time_days": 9,
        "fee_rate": 0.006
      },
      "bank_facility": {
        "seller_id": "shop_b_mympham",
        "bank_id": "tpb",
        "available_credit": 200000000.0,
        "annual_interest_rate": 0.125,
        "min_tenor_days": 30,
        "disbursement_fee_rate": 0.002
      },
      "profile": {
        "seller": {
          "seller_id": "shop_b_mympham",
          "display_name": "Mỹ Phẩm Hà Linh",
          "currency": "VND",
          "cash_balance": 52000000.0,
          "available_bank_credit": 200000000.0,
          "current_inventory_value": 95000000.0,
          "avg_daily_sales": 26000000.0,
          "pending_marketplace_payout": 35000000.0,
          "supplier_payables": 28000000.0,
          "open_loan_balance": 15000000.0,
          "expected_payout_date": "2026-09-26"
        },
        "inventory": [
          {
            "sku": "HL-SERUM",
            "on_hand": 170,
            "avg_daily_units": 20.0,
            "unit_cost": 420000.0,
            "supplier_lead_time_days": 9
          },
          {
            "sku": "HL-KEM",
            "on_hand": 130,
            "avg_daily_units": 14.0,
            "unit_cost": 560000.0,
            "supplier_lead_time_days": 11
          }
        ],
        "sales_history": [
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-22",
            "units": 13,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-22",
            "units": 14,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-23",
            "units": 10,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-23",
            "units": 17,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-24",
            "units": 9,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-24",
            "units": 17,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-25",
            "units": 14,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-25",
            "units": 17,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-26",
            "units": 10,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-26",
            "units": 15,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-27",
            "units": 10,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-27",
            "units": 19,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-28",
            "units": 13,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-28",
            "units": 20,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-29",
            "units": 12,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-29",
            "units": 18,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-30",
            "units": 14,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-30",
            "units": 18,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-08-31",
            "units": 11,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-08-31",
            "units": 17,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-01",
            "units": 15,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-01",
            "units": 16,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-02",
            "units": 12,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-02",
            "units": 18,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-03",
            "units": 14,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-03",
            "units": 20,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-04",
            "units": 15,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-04",
            "units": 17,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-05",
            "units": 14,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-05",
            "units": 22,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-06",
            "units": 16,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-06",
            "units": 19,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-07",
            "units": 15,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-07",
            "units": 19,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-08",
            "units": 12,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-08",
            "units": 18,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-09",
            "units": 16,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-09",
            "units": 25,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-10",
            "units": 15,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-10",
            "units": 24,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-11",
            "units": 13,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-11",
            "units": 25,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-12",
            "units": 13,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-12",
            "units": 23,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-13",
            "units": 17,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-13",
            "units": 19,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-14",
            "units": 15,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-14",
            "units": 22,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-15",
            "units": 17,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-15",
            "units": 23,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-16",
            "units": 17,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-16",
            "units": 20,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-17",
            "units": 18,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-17",
            "units": 28,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-18",
            "units": 16,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-18",
            "units": 23,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-19",
            "units": 17,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-19",
            "units": 21,
            "unit_price": 690000.0
          },
          {
            "sku": "HL-KEM",
            "order_date": "2026-09-20",
            "units": 17,
            "unit_price": 880000.0
          },
          {
            "sku": "HL-SERUM",
            "order_date": "2026-09-20",
            "units": 28,
            "unit_price": 690000.0
          }
        ],
        "supplier_terms": {
          "supplier_id": "ncc_b_01",
          "credit_limit": 80000000.0,
          "credit_days": 30,
          "lead_time_days": 9,
          "fee_rate": 0.006
        },
        "bank_facility": {
          "bank_id": "tpb",
          "available_credit": 200000000.0,
          "annual_interest_rate": 0.125,
          "min_tenor_days": 30,
          "disbursement_fee_rate": 0.002
        }
      },
      "preview": {
        "as_of": "2026-09-20",
        "currency": "VND",
        "horizon_days": 30,
        "funding_need": 85540000.0,
        "expected_sales": 854745000.0,
        "forecast_confidence": 0.8722,
        "pd": 0.040959,
        "risk_band": "MEDIUM",
        "risk_score": 0.853229,
        "recommended_limit": 185000000.0,
        "interest_rate": 0.125,
        "funding_plan": [
          {
            "source": "cash",
            "label": "Tiền mặt",
            "amount": 22000000.0,
            "cost": 0.0,
            "rate": 0.0
          },
          {
            "source": "supplier",
            "label": "Tín dụng NCC",
            "amount": 52000000.0,
            "cost": 0.0,
            "rate": 0.006
          },
          {
            "source": "loan",
            "label": "Vay ngân hàng",
            "amount": 11540000.0,
            "cost": 141641.64,
            "rate": 0.125
          }
        ],
        "total_cost": 453641.64,
        "funding_capacity": 259000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "policy": {
          "decision": "APPROVE",
          "approved": true,
          "requires_human_approval": true,
          "reasons": [
            "WITHIN_LIMITS",
            "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
            "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
          ],
          "max_executable_amount": 85540000.0
        },
        "metrics": {
          "days_of_cover": 7.77,
          "leverage_ratio": 0.055128,
          "liquidity_ratio": 2.023256,
          "inventory_value": 95000000.0,
          "avg_daily_sales": 26000000.0,
          "sku_count": 2,
          "history_days": 30
        },
        "sku_plan": [
          {
            "sku": "HL-SERUM",
            "forecast_daily_units": 21.8929,
            "on_hand": 170,
            "lead_time_days": 9,
            "safety_stock_days": 3,
            "required_units": 263,
            "reorder_units": 93,
            "unit_cost": 420000.0,
            "reorder_cost": 39060000.0,
            "days_of_cover": 7.7651
          },
          {
            "sku": "HL-KEM",
            "forecast_daily_units": 15.2107,
            "on_hand": 130,
            "lead_time_days": 11,
            "safety_stock_days": 3,
            "required_units": 213,
            "reorder_units": 83,
            "unit_cost": 560000.0,
            "reorder_cost": 46480000.0,
            "days_of_cover": 8.5466
          }
        ]
      },
      "applications": [
        {
          "application_id": "app_e4382259f7724621",
          "project_id": "prj_45528d38c35249fc",
          "seller_id": "shop_b_mympham",
          "seller_name": "Mỹ Phẩm Hà Linh",
          "amount": 85540000.0,
          "currency": "VND",
          "status": "DISBURSED",
          "action_id": "act_4a33f2ff28cf4d8c",
          "bank_id": "tpb",
          "note": "Nhập hàng cho đợt cao điểm",
          "pd": 0.040959,
          "risk_band": "MEDIUM",
          "recommended_limit": 185000000.0,
          "interest_rate": 0.125,
          "funding_plan": [
            {
              "source": "cash",
              "label": "Tiền mặt",
              "amount": 22000000.0,
              "cost": 0.0,
              "rate": 0.0
            },
            {
              "source": "supplier",
              "label": "Tín dụng NCC",
              "amount": 52000000.0,
              "cost": 0.0,
              "rate": 0.006
            },
            {
              "source": "loan",
              "label": "Vay ngân hàng",
              "amount": 11540000.0,
              "cost": 141641.64,
              "rate": 0.125
            }
          ],
          "submitted_at": "2026-09-21T13:23:02.852363",
          "decided_at": "2026-09-21T13:23:02.875428",
          "decided_by": "admin",
          "timeline": [
            {
              "status": "SUBMITTED",
              "at": "2026-09-21T13:23:02.852363",
              "by": "seller",
              "note": "Nhập hàng cho đợt cao điểm"
            },
            {
              "status": "UNDER_REVIEW",
              "at": "2026-09-21T13:23:02.865569",
              "by": "admin",
              "note": ""
            },
            {
              "status": "APPROVED",
              "at": "2026-09-21T13:23:02.868315",
              "by": "admin",
              "note": ""
            },
            {
              "status": "DISBURSED",
              "at": "2026-09-21T13:23:02.875428",
              "by": "admin",
              "note": ""
            }
          ]
        }
      ],
      "actions": [
        {
          "action_id": "act_4a33f2ff28cf4d8c",
          "workflow_id": "wf_9289739c49f143e1",
          "seller_id": "shop_b_mympham",
          "action_type": "FINANCING",
          "amount": 85540000.0,
          "status": "EXECUTED",
          "policy_decision": {
            "approved": true,
            "requires_human_approval": true,
            "reasons": [
              "WITHIN_LIMITS",
              "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
              "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
            ],
            "max_executable_amount": 85540000.0,
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
              "seller_id": "shop_b_mympham",
              "total_need": 85540000.0,
              "cash_amount": 22000000.0,
              "supplier_credit_amount": 52000000.0,
              "loan_amount": 11540000.0,
              "estimated_financing_cost": 453641.64,
              "funding_date": "2026-09-20",
              "rationale_codes": [
                "CASH_USED_ABOVE_MIN_RESERVE",
                "SUPPLIER_CREDIT_USED",
                "BANK_LOAN_USED",
                "FULLY_FUNDED",
                "SUPPLIER_LINE_PARTIALLY_UTILISED",
                "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
              ],
              "funding_capacity": 259000000.0,
              "shortfall": 0.0,
              "feasible": true,
              "cost_breakdown": {
                "cash": 0.0,
                "supplier_credit": 312000.0,
                "loan": 141641.64,
                "tenor_days": 30.0,
                "loan_cost_rate": 0.012274,
                "supplier_cost_rate": 0.006,
                "cash_capacity": 22000000.0,
                "supplier_capacity": 52000000.0,
                "loan_capacity": 185000000.0
              },
              "engine_version": "greedy-optimizer-v1"
            },
            "forecast": {
              "seller_id": "shop_b_mympham",
              "horizon_days": 30,
              "expected_sales": 854745000.0,
              "required_inventory_cost": 85540000.0,
              "projected_stockout_days": 7.7651,
              "confidence": 0.8722,
              "engine_version": "mock-forecast-v1",
              "sku_plan": [
                {
                  "sku": "HL-SERUM",
                  "forecast_daily_units": 21.8929,
                  "on_hand": 170,
                  "lead_time_days": 9,
                  "safety_stock_days": 3,
                  "required_units": 263,
                  "reorder_units": 93,
                  "unit_cost": 420000.0,
                  "reorder_cost": 39060000.0,
                  "days_of_cover": 7.7651
                },
                {
                  "sku": "HL-KEM",
                  "forecast_daily_units": 15.2107,
                  "on_hand": 130,
                  "lead_time_days": 11,
                  "safety_stock_days": 3,
                  "required_units": 213,
                  "reorder_units": 83,
                  "unit_cost": 560000.0,
                  "reorder_cost": 46480000.0,
                  "days_of_cover": 8.5466
                }
              ]
            },
            "risk": {
              "seller_id": "shop_b_mympham",
              "pd": 0.040959,
              "liquidity_score": 0.674419,
              "risk_score": 0.853229,
              "recommended_limit": 185000000.0,
              "risk_band": "MEDIUM",
              "engine_version": "mock-risk-v1",
              "factors": {
                "liquidity_ratio": 2.023256,
                "liquidity_score": 0.674419,
                "sales_factor": 1.0,
                "leverage_ratio": 0.055128,
                "leverage_factor": 0.944872,
                "monthly_sales": 780000000.0,
                "bank_headroom": 185000000.0,
                "raw_limit_before_cap": 260430481.4
              }
            },
            "supplier_terms": {
              "supplier_id": "ncc_b_01",
              "seller_id": "shop_b_mympham",
              "credit_limit": 80000000.0,
              "credit_days": 30,
              "lead_time_days": 9,
              "fee_rate": 0.006
            },
            "repayment_schedule": [
              {
                "source": "supplier_credit",
                "principal": 52000000.0,
                "fee": 312000.0,
                "total_due": 52312000.0,
                "due_date": "2026-10-20",
                "tenor_days": 30
              },
              {
                "source": "bank_loan",
                "principal": 11540000.0,
                "fee": 141641.64,
                "total_due": 11681641.64,
                "due_date": "2026-10-20",
                "tenor_days": 30
              }
            ],
            "facts": {
              "currency": "VND",
              "cash_balance": 52000000.0,
              "pending_marketplace_payout": 35000000.0,
              "open_loan_balance": 15000000.0,
              "supplier_payables": 28000000.0,
              "horizon_days": 30,
              "expected_sales": 854745000.0,
              "required_inventory_cost": 85540000.0,
              "projected_stockout_days": 7.7651,
              "forecast_confidence": 0.8722,
              "pd": 0.040959,
              "risk_band": "MEDIUM",
              "risk_score": 0.853229,
              "liquidity_score": 0.674419,
              "recommended_credit_limit": 185000000.0,
              "risk_engine_version": "mock-risk-v1",
              "capital_need": 85540000.0,
              "cash_amount": 22000000.0,
              "supplier_credit_amount": 52000000.0,
              "loan_amount": 11540000.0,
              "estimated_financing_cost": 453641.64,
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
              "max_executable_amount": 85540000.0,
              "repayment_schedule": [
                {
                  "source": "supplier_credit",
                  "principal": 52000000.0,
                  "fee": 312000.0,
                  "total_due": 52312000.0,
                  "due_date": "2026-10-20",
                  "tenor_days": 30
                },
                {
                  "source": "bank_loan",
                  "principal": 11540000.0,
                  "fee": 141641.64,
                  "total_due": 11681641.64,
                  "due_date": "2026-10-20",
                  "tenor_days": 30
                }
              ]
            },
            "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
          },
          "created_at": "2026-09-21T13:22:52.190832",
          "approved_by": "admin",
          "approved_at": "2026-09-21T13:23:02.867910",
          "rejected_by": null,
          "rejected_at": null,
          "executed_at": "2026-09-21T13:23:02.873129",
          "expires_at": "2026-09-21T13:52:52.190561"
        }
      ],
      "workflows": [
        {
          "workflow_id": "wf_9289739c49f143e1",
          "status": "WAITING_APPROVAL",
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "orchestrator": "deterministic",
          "created_at": "2026-09-21T13:22:52.175616",
          "updated_at": "2026-09-21T13:22:57.522100"
        }
      ],
      "conversations": [
        {
          "conversation_id": "cnv_fb46e8d55b484f1f",
          "project_id": "prj_45528d38c35249fc",
          "title": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "message_count": 2,
          "created_at": "2026-09-21T13:22:52.173038",
          "updated_at": "2026-09-21T13:22:57.523236"
        }
      ]
    },
    "shop_c_taphoa": {
      "seller": {
        "seller_id": "shop_c_taphoa",
        "display_name": "Tạp Hóa Cô Ba",
        "cash_balance": 38000000.0,
        "available_bank_credit": 120000000.0,
        "current_inventory_value": 48000000.0,
        "avg_daily_sales": 20000000.0,
        "pending_marketplace_payout": 35000000.0,
        "supplier_payables": 40000000.0,
        "open_loan_balance": 12000000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-24"
      },
      "project": {
        "project_id": "prj_57335cc0204c4de7",
        "owner": "seller",
        "name": "Tạp Hóa Cô Ba",
        "seller_id": "shop_c_taphoa",
        "currency": "VND",
        "status": "ACTIVE",
        "source": "form",
        "created_at": "2026-09-21T13:22:57.546819",
        "updated_at": "2026-09-21T13:22:57.546823",
        "profile_status": "OK",
        "warning_count": 0,
        "conversation_count": 1,
        "message_count": 2,
        "last_message_at": "2026-09-21T13:23:02.845124",
        "funding_status": "NONE",
        "application_id": null,
        "funding_need": 38115000.0,
        "risk_band": "MEDIUM",
        "pd": 0.063511,
        "recommended_limit": 108000000.0
      },
      "scores": {
        "pd": 0.063511,
        "risk_band": "MEDIUM",
        "risk_score": 0.761179,
        "recommended_limit": 108000000.0,
        "interest_rate": 0.145,
        "funding_need": 38115000.0,
        "exposure": 52000000.0,
        "deployed": 0.0,
        "limit_utilization": 0.481481,
        "days_of_cover": 4.47,
        "leverage_ratio": 0.086667,
        "liquidity_ratio": 1.403846,
        "forecast_confidence": 0.8994,
        "bank_id": "tcb",
        "factors": [
          {
            "label": "Thanh khoản",
            "value": 1.403846,
            "detail": "tiền mặt + tiền sàn sắp trả, chia cho nợ ngắn hạn",
            "score": 0.467949,
            "weight": 0.4,
            "direction": "bad"
          },
          {
            "label": "Quy mô doanh thu",
            "value": 600000000.0,
            "detail": "doanh thu tháng so với mốc chuẩn",
            "score": 1.0,
            "weight": 0.3,
            "direction": "good"
          },
          {
            "label": "Đòn bẩy",
            "value": 0.086667,
            "detail": "nợ ngắn hạn chia cho doanh thu tháng",
            "score": 0.913333,
            "weight": 0.3,
            "direction": "good"
          }
        ]
      },
      "inventory": [
        {
          "sku": "CB-GAO-25",
          "on_hand": 120,
          "avg_daily_units": 24.0,
          "unit_cost": 320000.0,
          "supplier_lead_time_days": 4
        },
        {
          "sku": "CB-DAU-5L",
          "on_hand": 110,
          "avg_daily_units": 20.0,
          "unit_cost": 245000.0,
          "supplier_lead_time_days": 4
        },
        {
          "sku": "CB-SUA-LOC",
          "on_hand": 170,
          "avg_daily_units": 33.0,
          "unit_cost": 165000.0,
          "supplier_lead_time_days": 3
        }
      ],
      "supplier_terms": {
        "supplier_id": "ncc_c_01",
        "seller_id": "shop_c_taphoa",
        "credit_limit": 45000000.0,
        "credit_days": 21,
        "lead_time_days": 4,
        "fee_rate": 0.009
      },
      "bank_facility": {
        "seller_id": "shop_c_taphoa",
        "bank_id": "tcb",
        "available_credit": 120000000.0,
        "annual_interest_rate": 0.145,
        "min_tenor_days": 30,
        "disbursement_fee_rate": 0.003
      },
      "profile": {
        "seller": {
          "seller_id": "shop_c_taphoa",
          "display_name": "Tạp Hóa Cô Ba",
          "currency": "VND",
          "cash_balance": 38000000.0,
          "available_bank_credit": 120000000.0,
          "current_inventory_value": 48000000.0,
          "avg_daily_sales": 20000000.0,
          "pending_marketplace_payout": 35000000.0,
          "supplier_payables": 40000000.0,
          "open_loan_balance": 12000000.0,
          "expected_payout_date": "2026-09-24"
        },
        "inventory": [
          {
            "sku": "CB-GAO-25",
            "on_hand": 120,
            "avg_daily_units": 24.0,
            "unit_cost": 320000.0,
            "supplier_lead_time_days": 4
          },
          {
            "sku": "CB-DAU-5L",
            "on_hand": 110,
            "avg_daily_units": 20.0,
            "unit_cost": 245000.0,
            "supplier_lead_time_days": 4
          },
          {
            "sku": "CB-SUA-LOC",
            "on_hand": 170,
            "avg_daily_units": 33.0,
            "unit_cost": 165000.0,
            "supplier_lead_time_days": 3
          }
        ],
        "sales_history": [
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-22",
            "units": 15,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-22",
            "units": 18,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-22",
            "units": 31,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-23",
            "units": 16,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-23",
            "units": 19,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-23",
            "units": 32,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-24",
            "units": 17,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-24",
            "units": 21,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-24",
            "units": 35,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-25",
            "units": 21,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-25",
            "units": 24,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-25",
            "units": 28,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-26",
            "units": 19,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-26",
            "units": 20,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-26",
            "units": 33,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-27",
            "units": 20,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-27",
            "units": 20,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-27",
            "units": 37,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-28",
            "units": 16,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-28",
            "units": 21,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-28",
            "units": 37,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-29",
            "units": 19,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-29",
            "units": 26,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-29",
            "units": 28,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-30",
            "units": 22,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-30",
            "units": 20,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-30",
            "units": 35,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-08-31",
            "units": 20,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-08-31",
            "units": 26,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-08-31",
            "units": 35,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-01",
            "units": 23,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-01",
            "units": 26,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-01",
            "units": 34,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-02",
            "units": 23,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-02",
            "units": 21,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-02",
            "units": 40,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-03",
            "units": 19,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-03",
            "units": 25,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-03",
            "units": 35,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-04",
            "units": 16,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-04",
            "units": 24,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-04",
            "units": 34,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-05",
            "units": 22,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-05",
            "units": 24,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-05",
            "units": 41,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-06",
            "units": 17,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-06",
            "units": 30,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-06",
            "units": 37,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-07",
            "units": 16,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-07",
            "units": 21,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-07",
            "units": 33,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-08",
            "units": 23,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-08",
            "units": 21,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-08",
            "units": 33,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-09",
            "units": 24,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-09",
            "units": 31,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-09",
            "units": 36,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-10",
            "units": 24,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-10",
            "units": 25,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-10",
            "units": 30,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-11",
            "units": 25,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-11",
            "units": 23,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-11",
            "units": 39,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-12",
            "units": 19,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-12",
            "units": 25,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-12",
            "units": 41,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-13",
            "units": 18,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-13",
            "units": 26,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-13",
            "units": 37,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-14",
            "units": 18,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-14",
            "units": 32,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-14",
            "units": 44,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-15",
            "units": 26,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-15",
            "units": 24,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-15",
            "units": 45,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-16",
            "units": 18,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-16",
            "units": 25,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-16",
            "units": 40,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-17",
            "units": 19,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-17",
            "units": 29,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-17",
            "units": 42,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-18",
            "units": 18,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-18",
            "units": 29,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-18",
            "units": 34,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-19",
            "units": 18,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-19",
            "units": 34,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-19",
            "units": 33,
            "unit_price": 210000.0
          },
          {
            "sku": "CB-DAU-5L",
            "order_date": "2026-09-20",
            "units": 18,
            "unit_price": 300000.0
          },
          {
            "sku": "CB-GAO-25",
            "order_date": "2026-09-20",
            "units": 32,
            "unit_price": 395000.0
          },
          {
            "sku": "CB-SUA-LOC",
            "order_date": "2026-09-20",
            "units": 48,
            "unit_price": 210000.0
          }
        ],
        "supplier_terms": {
          "supplier_id": "ncc_c_01",
          "credit_limit": 45000000.0,
          "credit_days": 21,
          "lead_time_days": 4,
          "fee_rate": 0.009
        },
        "bank_facility": {
          "bank_id": "tcb",
          "available_credit": 120000000.0,
          "annual_interest_rate": 0.145,
          "min_tenor_days": 30,
          "disbursement_fee_rate": 0.003
        }
      },
      "preview": {
        "as_of": "2026-09-20",
        "currency": "VND",
        "horizon_days": 30,
        "funding_need": 38115000.0,
        "expected_sales": 732904553.57,
        "forecast_confidence": 0.8994,
        "pd": 0.063511,
        "risk_band": "MEDIUM",
        "risk_score": 0.761179,
        "recommended_limit": 108000000.0,
        "interest_rate": 0.145,
        "funding_plan": [
          {
            "source": "cash",
            "label": "Tiền mặt",
            "amount": 8000000.0,
            "cost": 0.0,
            "rate": 0.0
          },
          {
            "source": "supplier",
            "label": "Tín dụng NCC",
            "amount": 5000000.0,
            "cost": 0.0,
            "rate": 0.009
          },
          {
            "source": "loan",
            "label": "Vay ngân hàng",
            "amount": 25115000.0,
            "cost": 374660.75,
            "rate": 0.145
          }
        ],
        "total_cost": 419660.75,
        "funding_capacity": 121000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "policy": {
          "decision": "APPROVE",
          "approved": true,
          "requires_human_approval": true,
          "reasons": [
            "WITHIN_LIMITS",
            "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
          ],
          "max_executable_amount": 38115000.0
        },
        "metrics": {
          "days_of_cover": 4.47,
          "leverage_ratio": 0.086667,
          "liquidity_ratio": 1.403846,
          "inventory_value": 48000000.0,
          "avg_daily_sales": 20000000.0,
          "sku_count": 3,
          "history_days": 30
        },
        "sku_plan": [
          {
            "sku": "CB-GAO-25",
            "forecast_daily_units": 26.5768,
            "on_hand": 120,
            "lead_time_days": 4,
            "safety_stock_days": 3,
            "required_units": 187,
            "reorder_units": 67,
            "unit_cost": 320000.0,
            "reorder_cost": 21440000.0,
            "days_of_cover": 4.5152
          },
          {
            "sku": "CB-DAU-5L",
            "forecast_daily_units": 19.8411,
            "on_hand": 110,
            "lead_time_days": 4,
            "safety_stock_days": 3,
            "required_units": 139,
            "reorder_units": 29,
            "unit_cost": 245000.0,
            "reorder_cost": 7105000.0,
            "days_of_cover": 5.5441
          },
          {
            "sku": "CB-SUA-LOC",
            "forecast_daily_units": 38.0,
            "on_hand": 170,
            "lead_time_days": 3,
            "safety_stock_days": 3,
            "required_units": 228,
            "reorder_units": 58,
            "unit_cost": 165000.0,
            "reorder_cost": 9570000.0,
            "days_of_cover": 4.4737
          }
        ]
      },
      "applications": [],
      "actions": [
        {
          "action_id": "act_4013457b7cc44c92",
          "workflow_id": "wf_e95c33fa39994f3a",
          "seller_id": "shop_c_taphoa",
          "action_type": "FINANCING",
          "amount": 38115000.0,
          "status": "AWAITING_APPROVAL",
          "policy_decision": {
            "approved": true,
            "requires_human_approval": true,
            "reasons": [
              "WITHIN_LIMITS",
              "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
            ],
            "max_executable_amount": 38115000.0,
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
              "seller_id": "shop_c_taphoa",
              "total_need": 38115000.0,
              "cash_amount": 8000000.0,
              "supplier_credit_amount": 5000000.0,
              "loan_amount": 25115000.0,
              "estimated_financing_cost": 419660.75,
              "funding_date": "2026-09-20",
              "rationale_codes": [
                "CASH_USED_ABOVE_MIN_RESERVE",
                "SUPPLIER_CREDIT_USED",
                "BANK_LOAN_USED",
                "FULLY_FUNDED",
                "SUPPLIER_LINE_PARTIALLY_UTILISED"
              ],
              "funding_capacity": 121000000.0,
              "shortfall": 0.0,
              "feasible": true,
              "cost_breakdown": {
                "cash": 0.0,
                "supplier_credit": 45000.0,
                "loan": 374660.75,
                "tenor_days": 30.0,
                "loan_cost_rate": 0.014918,
                "supplier_cost_rate": 0.009,
                "cash_capacity": 8000000.0,
                "supplier_capacity": 5000000.0,
                "loan_capacity": 108000000.0
              },
              "engine_version": "greedy-optimizer-v1"
            },
            "forecast": {
              "seller_id": "shop_c_taphoa",
              "horizon_days": 30,
              "expected_sales": 732904553.57,
              "required_inventory_cost": 38115000.0,
              "projected_stockout_days": 4.4737,
              "confidence": 0.8994,
              "engine_version": "mock-forecast-v1",
              "sku_plan": [
                {
                  "sku": "CB-GAO-25",
                  "forecast_daily_units": 26.5768,
                  "on_hand": 120,
                  "lead_time_days": 4,
                  "safety_stock_days": 3,
                  "required_units": 187,
                  "reorder_units": 67,
                  "unit_cost": 320000.0,
                  "reorder_cost": 21440000.0,
                  "days_of_cover": 4.5152
                },
                {
                  "sku": "CB-DAU-5L",
                  "forecast_daily_units": 19.8411,
                  "on_hand": 110,
                  "lead_time_days": 4,
                  "safety_stock_days": 3,
                  "required_units": 139,
                  "reorder_units": 29,
                  "unit_cost": 245000.0,
                  "reorder_cost": 7105000.0,
                  "days_of_cover": 5.5441
                },
                {
                  "sku": "CB-SUA-LOC",
                  "forecast_daily_units": 38.0,
                  "on_hand": 170,
                  "lead_time_days": 3,
                  "safety_stock_days": 3,
                  "required_units": 228,
                  "reorder_units": 58,
                  "unit_cost": 165000.0,
                  "reorder_cost": 9570000.0,
                  "days_of_cover": 4.4737
                }
              ]
            },
            "risk": {
              "seller_id": "shop_c_taphoa",
              "pd": 0.063511,
              "liquidity_score": 0.467949,
              "risk_score": 0.761179,
              "recommended_limit": 108000000.0,
              "risk_band": "MEDIUM",
              "engine_version": "mock-risk-v1",
              "factors": {
                "liquidity_ratio": 1.403846,
                "liquidity_score": 0.467949,
                "sales_factor": 1.0,
                "leverage_ratio": 0.086667,
                "leverage_factor": 0.913333,
                "monthly_sales": 600000000.0,
                "bank_headroom": 108000000.0,
                "raw_limit_before_cap": 149969708.33
              }
            },
            "supplier_terms": {
              "supplier_id": "ncc_c_01",
              "seller_id": "shop_c_taphoa",
              "credit_limit": 45000000.0,
              "credit_days": 21,
              "lead_time_days": 4,
              "fee_rate": 0.009
            },
            "repayment_schedule": [
              {
                "source": "supplier_credit",
                "principal": 5000000.0,
                "fee": 45000.0,
                "total_due": 5045000.0,
                "due_date": "2026-10-11",
                "tenor_days": 21
              },
              {
                "source": "bank_loan",
                "principal": 25115000.0,
                "fee": 374660.75,
                "total_due": 25489660.75,
                "due_date": "2026-10-20",
                "tenor_days": 30
              }
            ],
            "facts": {
              "currency": "VND",
              "cash_balance": 38000000.0,
              "pending_marketplace_payout": 35000000.0,
              "open_loan_balance": 12000000.0,
              "supplier_payables": 40000000.0,
              "horizon_days": 30,
              "expected_sales": 732904553.57,
              "required_inventory_cost": 38115000.0,
              "projected_stockout_days": 4.4737,
              "forecast_confidence": 0.8994,
              "pd": 0.063511,
              "risk_band": "MEDIUM",
              "risk_score": 0.761179,
              "liquidity_score": 0.467949,
              "recommended_credit_limit": 108000000.0,
              "risk_engine_version": "mock-risk-v1",
              "capital_need": 38115000.0,
              "cash_amount": 8000000.0,
              "supplier_credit_amount": 5000000.0,
              "loan_amount": 25115000.0,
              "estimated_financing_cost": 419660.75,
              "funding_date": "2026-09-20",
              "rationale_codes": [
                "CASH_USED_ABOVE_MIN_RESERVE",
                "SUPPLIER_CREDIT_USED",
                "BANK_LOAN_USED",
                "FULLY_FUNDED",
                "SUPPLIER_LINE_PARTIALLY_UTILISED"
              ],
              "policy_approved": true,
              "requires_human_approval": true,
              "policy_reasons": [
                "WITHIN_LIMITS",
                "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
              ],
              "max_executable_amount": 38115000.0,
              "repayment_schedule": [
                {
                  "source": "supplier_credit",
                  "principal": 5000000.0,
                  "fee": 45000.0,
                  "total_due": 5045000.0,
                  "due_date": "2026-10-11",
                  "tenor_days": 21
                },
                {
                  "source": "bank_loan",
                  "principal": 25115000.0,
                  "fee": 374660.75,
                  "total_due": 25489660.75,
                  "due_date": "2026-10-20",
                  "tenor_days": 30
                }
              ]
            },
            "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
          },
          "created_at": "2026-09-21T13:22:57.571461",
          "approved_by": null,
          "approved_at": null,
          "rejected_by": null,
          "rejected_at": null,
          "executed_at": null,
          "expires_at": "2026-09-21T13:52:57.571150"
        }
      ],
      "workflows": [
        {
          "workflow_id": "wf_e95c33fa39994f3a",
          "status": "WAITING_APPROVAL",
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "orchestrator": "deterministic",
          "created_at": "2026-09-21T13:22:57.553865",
          "updated_at": "2026-09-21T13:23:02.844006"
        }
      ],
      "conversations": [
        {
          "conversation_id": "cnv_aa18c6e9c31d4d00",
          "project_id": "prj_57335cc0204c4de7",
          "title": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "message_count": 2,
          "created_at": "2026-09-21T13:22:57.551324",
          "updated_at": "2026-09-21T13:23:02.845332"
        }
      ]
    },
    "shop_d_linhkien": {
      "seller": {
        "seller_id": "shop_d_linhkien",
        "display_name": "Linh Kiện Đức Minh",
        "cash_balance": 18000000.0,
        "available_bank_credit": 90000000.0,
        "current_inventory_value": 140000000.0,
        "avg_daily_sales": 18000000.0,
        "pending_marketplace_payout": 7000000.0,
        "supplier_payables": 140000000.0,
        "open_loan_balance": 75000000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-23"
      },
      "project": {
        "project_id": "prj_285a8d5f940e4d66",
        "owner": "seller",
        "name": "Linh Kiện Đức Minh",
        "seller_id": "shop_d_linhkien",
        "currency": "VND",
        "status": "ACTIVE",
        "source": "form",
        "created_at": "2026-09-21T13:22:48.593199",
        "updated_at": "2026-09-21T13:22:48.593204",
        "profile_status": "OK",
        "warning_count": 0,
        "conversation_count": 1,
        "message_count": 2,
        "last_message_at": "2026-09-21T13:22:52.148531",
        "funding_status": "NONE",
        "application_id": null,
        "funding_need": 66600000.0,
        "risk_band": "HIGH",
        "pd": 0.135815,
        "recommended_limit": 15000000.0
      },
      "scores": {
        "pd": 0.135815,
        "risk_band": "HIGH",
        "risk_score": 0.466059,
        "recommended_limit": 15000000.0,
        "interest_rate": 0.168,
        "funding_need": 66600000.0,
        "exposure": 215000000.0,
        "deployed": 0.0,
        "limit_utilization": 14.333333,
        "days_of_cover": 12.7,
        "leverage_ratio": 0.398148,
        "liquidity_ratio": 0.116279,
        "forecast_confidence": 0.8947,
        "bank_id": "webank",
        "factors": [
          {
            "label": "Thanh khoản",
            "value": 0.116279,
            "detail": "tiền mặt + tiền sàn sắp trả, chia cho nợ ngắn hạn",
            "score": 0.03876,
            "weight": 0.4,
            "direction": "bad"
          },
          {
            "label": "Quy mô doanh thu",
            "value": 540000000.0,
            "detail": "doanh thu tháng so với mốc chuẩn",
            "score": 0.9,
            "weight": 0.3,
            "direction": "good"
          },
          {
            "label": "Đòn bẩy",
            "value": 0.398148,
            "detail": "nợ ngắn hạn chia cho doanh thu tháng",
            "score": 0.601852,
            "weight": 0.3,
            "direction": "good"
          }
        ]
      },
      "inventory": [
        {
          "sku": "DM-RAM-16",
          "on_hand": 90,
          "avg_daily_units": 6.0,
          "unit_cost": 1150000.0,
          "supplier_lead_time_days": 14
        },
        {
          "sku": "DM-SSD-1T",
          "on_hand": 55,
          "avg_daily_units": 4.0,
          "unit_cost": 1750000.0,
          "supplier_lead_time_days": 14
        }
      ],
      "supplier_terms": {
        "supplier_id": "ncc_d_01",
        "seller_id": "shop_d_linhkien",
        "credit_limit": 150000000.0,
        "credit_days": 45,
        "lead_time_days": 14,
        "fee_rate": 0.011
      },
      "bank_facility": {
        "seller_id": "shop_d_linhkien",
        "bank_id": "webank",
        "available_credit": 90000000.0,
        "annual_interest_rate": 0.168,
        "min_tenor_days": 30,
        "disbursement_fee_rate": 0.005
      },
      "profile": {
        "seller": {
          "seller_id": "shop_d_linhkien",
          "display_name": "Linh Kiện Đức Minh",
          "currency": "VND",
          "cash_balance": 18000000.0,
          "available_bank_credit": 90000000.0,
          "current_inventory_value": 140000000.0,
          "avg_daily_sales": 18000000.0,
          "pending_marketplace_payout": 7000000.0,
          "supplier_payables": 140000000.0,
          "open_loan_balance": 75000000.0,
          "expected_payout_date": "2026-09-23"
        },
        "inventory": [
          {
            "sku": "DM-RAM-16",
            "on_hand": 90,
            "avg_daily_units": 6.0,
            "unit_cost": 1150000.0,
            "supplier_lead_time_days": 14
          },
          {
            "sku": "DM-SSD-1T",
            "on_hand": 55,
            "avg_daily_units": 4.0,
            "unit_cost": 1750000.0,
            "supplier_lead_time_days": 14
          }
        ],
        "sales_history": [
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-22",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-22",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-23",
            "units": 5,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-23",
            "units": 3,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-24",
            "units": 5,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-24",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-25",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-25",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-26",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-26",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-27",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-27",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-28",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-28",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-29",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-29",
            "units": 3,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-30",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-30",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-08-31",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-08-31",
            "units": 3,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-01",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-01",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-02",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-02",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-03",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-03",
            "units": 3,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-04",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-04",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-05",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-05",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-06",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-06",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-07",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-07",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-08",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-08",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-09",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-09",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-10",
            "units": 7,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-10",
            "units": 3,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-11",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-11",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-12",
            "units": 8,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-12",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-13",
            "units": 5,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-13",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-14",
            "units": 8,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-14",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-15",
            "units": 8,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-15",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-16",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-16",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-17",
            "units": 8,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-17",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-18",
            "units": 8,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-18",
            "units": 4,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-19",
            "units": 6,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-19",
            "units": 5,
            "unit_price": 2300000.0
          },
          {
            "sku": "DM-RAM-16",
            "order_date": "2026-09-20",
            "units": 8,
            "unit_price": 1520000.0
          },
          {
            "sku": "DM-SSD-1T",
            "order_date": "2026-09-20",
            "units": 5,
            "unit_price": 2300000.0
          }
        ],
        "supplier_terms": {
          "supplier_id": "ncc_d_01",
          "credit_limit": 150000000.0,
          "credit_days": 45,
          "lead_time_days": 14,
          "fee_rate": 0.011
        },
        "bank_facility": {
          "bank_id": "webank",
          "available_credit": 90000000.0,
          "annual_interest_rate": 0.168,
          "min_tenor_days": 30,
          "disbursement_fee_rate": 0.005
        }
      },
      "preview": {
        "as_of": "2026-09-20",
        "currency": "VND",
        "horizon_days": 30,
        "funding_need": 66600000.0,
        "expected_sales": 615633214.29,
        "forecast_confidence": 0.8947,
        "pd": 0.135815,
        "risk_band": "HIGH",
        "risk_score": 0.466059,
        "recommended_limit": 15000000.0,
        "interest_rate": 0.168,
        "funding_plan": [
          {
            "source": "supplier",
            "label": "Tín dụng NCC",
            "amount": 10000000.0,
            "cost": 0.0,
            "rate": 0.011
          },
          {
            "source": "loan",
            "label": "Vay ngân hàng",
            "amount": 15000000.0,
            "cost": 385684.93,
            "rate": 0.168
          }
        ],
        "total_cost": 495684.93,
        "funding_capacity": 25000000.0,
        "shortfall": 41600000.0,
        "feasible": false,
        "policy": {
          "decision": "DECLINE",
          "approved": false,
          "requires_human_approval": false,
          "reasons": [
            "RISK_BAND_HIGH"
          ],
          "max_executable_amount": 0.0
        },
        "metrics": {
          "days_of_cover": 12.7,
          "leverage_ratio": 0.398148,
          "liquidity_ratio": 0.116279,
          "inventory_value": 140000000.0,
          "avg_daily_sales": 18000000.0,
          "sku_count": 2,
          "history_days": 30
        },
        "sku_plan": [
          {
            "sku": "DM-RAM-16",
            "forecast_daily_units": 6.9482,
            "on_hand": 90,
            "lead_time_days": 14,
            "safety_stock_days": 3,
            "required_units": 119,
            "reorder_units": 29,
            "unit_cost": 1150000.0,
            "reorder_cost": 33350000.0,
            "days_of_cover": 12.953
          },
          {
            "sku": "DM-SSD-1T",
            "forecast_daily_units": 4.3304,
            "on_hand": 55,
            "lead_time_days": 14,
            "safety_stock_days": 3,
            "required_units": 74,
            "reorder_units": 19,
            "unit_cost": 1750000.0,
            "reorder_cost": 33250000.0,
            "days_of_cover": 12.701
          }
        ]
      },
      "applications": [],
      "actions": [],
      "workflows": [
        {
          "workflow_id": "wf_28cff625554244a4",
          "status": "POLICY_REJECTED",
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "orchestrator": "deterministic",
          "created_at": "2026-09-21T13:22:48.598385",
          "updated_at": "2026-09-21T13:22:52.147559"
        }
      ],
      "conversations": [
        {
          "conversation_id": "cnv_81db9334ef154247",
          "project_id": "prj_285a8d5f940e4d66",
          "title": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
          "message_count": 2,
          "created_at": "2026-09-21T13:22:48.595994",
          "updated_at": "2026-09-21T13:22:52.148653"
        }
      ]
    }
  },
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
    },
    {
      "seller_id": "shop_a_thoitrang",
      "display_name": "Thời Trang Anh Thư",
      "currency": "VND"
    },
    {
      "seller_id": "shop_b_mympham",
      "display_name": "Mỹ Phẩm Hà Linh",
      "currency": "VND"
    },
    {
      "seller_id": "shop_c_taphoa",
      "display_name": "Tạp Hóa Cô Ba",
      "currency": "VND"
    },
    {
      "seller_id": "shop_d_linhkien",
      "display_name": "Linh Kiện Đức Minh",
      "currency": "VND"
    }
  ],
  "stats": {
    "sellers": 8,
    "workflows": 8,
    "actions": 5,
    "actions_by_status": {
      "EXECUTED": 3,
      "AWAITING_APPROVAL": 1,
      "PROPOSED": 1
    },
    "workflows_by_status": {
      "WAITING_APPROVAL": 4,
      "POLICY_REJECTED": 2,
      "NO_ACTION_NEEDED": 1,
      "PROPOSAL_CREATED": 1
    },
    "awaiting_approval": 1,
    "executed_total": 480510000.0,
    "total_exposure": 1055510000.0,
    "risk_bands": {
      "HIGH": 5,
      "LOW": 2,
      "MEDIUM": 1
    }
  },
  "workflows": [
    {
      "workflow_id": "wf_3a2010710eab4053",
      "seller_id": "seller_demo_004",
      "display_name": "My Pham Lan Chi",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "created_at": "2026-09-21T13:23:18.620071",
      "updated_at": "2026-09-21T13:23:25.553288",
      "parent_workflow_id": null,
      "action_id": "act_0ba3e945960544bc",
      "capital_need": 257850000.0,
      "loan_amount": 87850000.0,
      "risk_band": "LOW",
      "tool_calls": 9,
      "errors": 0
    },
    {
      "workflow_id": "wf_24da030f648f4d48",
      "seller_id": "seller_demo_003",
      "display_name": "Thoi Trang Ha My",
      "status": "POLICY_REJECTED",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "created_at": "2026-09-21T13:23:14.882885",
      "updated_at": "2026-09-21T13:23:18.617439",
      "parent_workflow_id": null,
      "action_id": null,
      "capital_need": 15860000.0,
      "loan_amount": 0.0,
      "risk_band": "HIGH",
      "tool_calls": 8,
      "errors": 0
    },
    {
      "workflow_id": "wf_ab7c004d0e534c26",
      "seller_id": "seller_demo_002",
      "display_name": "Dien May Tuan Phat",
      "status": "NO_ACTION_NEEDED",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "created_at": "2026-09-21T13:23:10.024698",
      "updated_at": "2026-09-21T13:23:14.879789",
      "parent_workflow_id": null,
      "action_id": null,
      "capital_need": 0.0,
      "loan_amount": 0.0,
      "risk_band": "LOW",
      "tool_calls": 8,
      "errors": 0
    },
    {
      "workflow_id": "wf_e255ea46d47f4200",
      "seller_id": "seller_demo_001",
      "display_name": "Nha Sach Minh Anh",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "created_at": "2026-09-21T13:23:02.882020",
      "updated_at": "2026-09-21T13:23:10.012436",
      "parent_workflow_id": null,
      "action_id": "act_cc721481978f435c",
      "capital_need": 137120000.0,
      "loan_amount": 82120000.0,
      "risk_band": "MEDIUM",
      "tool_calls": 9,
      "errors": 0
    },
    {
      "workflow_id": "wf_e95c33fa39994f3a",
      "seller_id": "shop_c_taphoa",
      "display_name": "Tạp Hóa Cô Ba",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "created_at": "2026-09-21T13:22:57.553865",
      "updated_at": "2026-09-21T13:23:02.844006",
      "parent_workflow_id": null,
      "action_id": "act_4013457b7cc44c92",
      "capital_need": 38115000.0,
      "loan_amount": 25115000.0,
      "risk_band": "MEDIUM",
      "tool_calls": 9,
      "errors": 0
    },
    {
      "workflow_id": "wf_9289739c49f143e1",
      "seller_id": "shop_b_mympham",
      "display_name": "Mỹ Phẩm Hà Linh",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "created_at": "2026-09-21T13:22:52.175616",
      "updated_at": "2026-09-21T13:22:57.522100",
      "parent_workflow_id": null,
      "action_id": "act_4a33f2ff28cf4d8c",
      "capital_need": 85540000.0,
      "loan_amount": 11540000.0,
      "risk_band": "MEDIUM",
      "tool_calls": 9,
      "errors": 0
    },
    {
      "workflow_id": "wf_28cff625554244a4",
      "seller_id": "shop_d_linhkien",
      "display_name": "Linh Kiện Đức Minh",
      "status": "POLICY_REJECTED",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "created_at": "2026-09-21T13:22:48.598385",
      "updated_at": "2026-09-21T13:22:52.147559",
      "parent_workflow_id": null,
      "action_id": null,
      "capital_need": 66600000.0,
      "loan_amount": 15000000.0,
      "risk_band": "HIGH",
      "tool_calls": 8,
      "errors": 0
    },
    {
      "workflow_id": "wf_03ef9140cee94ca1",
      "seller_id": "shop_a_thoitrang",
      "display_name": "Thời Trang Anh Thư",
      "status": "PROPOSAL_CREATED",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "created_at": "2026-09-21T13:21:52.738940",
      "updated_at": "2026-09-21T13:22:48.569511",
      "parent_workflow_id": null,
      "action_id": "act_624fe049d17e4a16",
      "capital_need": 36260000.0,
      "loan_amount": 0.0,
      "risk_band": "LOW",
      "tool_calls": 9,
      "errors": 0
    }
  ],
  "details": {
    "wf_3a2010710eab4053": {
      "workflow_id": "wf_3a2010710eab4053",
      "seller_id": "seller_demo_004",
      "display_name": "My Pham Lan Chi",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T13:23:18.620071",
      "updated_at": "2026-09-21T13:23:25.553288",
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
          "tool_call_id": "tc_c91239242d084048",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.508,
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
          "created_at": "2026-09-21T13:23:18.620778"
        },
        {
          "tool_call_id": "tc_f596a6b5cf9d4ec2",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 1.059,
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
          "created_at": "2026-09-21T13:23:18.622952"
        },
        {
          "tool_call_id": "tc_35d72f8a085a4e91",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 2.442,
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
          "created_at": "2026-09-21T13:23:18.626550"
        },
        {
          "tool_call_id": "tc_4e8796f0ff654e28",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.391,
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
          "created_at": "2026-09-21T13:23:18.628530"
        },
        {
          "tool_call_id": "tc_7bc7e6a6cc794dde",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.509,
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
          "created_at": "2026-09-21T13:23:18.630216"
        },
        {
          "tool_call_id": "tc_87c18ff7194d4cc1",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.32,
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
          "created_at": "2026-09-21T13:23:18.631690"
        },
        {
          "tool_call_id": "tc_980a9101c6da4801",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.435,
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
          "created_at": "2026-09-21T13:23:18.633295"
        },
        {
          "tool_call_id": "tc_464cd500cbb54803",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.305,
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
          "created_at": "2026-09-21T13:23:18.634811"
        },
        {
          "tool_call_id": "tc_ef61ad21341e47da",
          "tool_name": "create_action_proposal",
          "agent": "orchestrator",
          "step": 9,
          "success": true,
          "latency_ms": 0.762,
          "input_hash": "c9b81c2a1381a0f46dfdea0d0e4257e7",
          "output_hash": "239d98c2a1f070221ccdf23362e12e2d",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_004"
          },
          "output": {
            "action_id": "act_0ba3e945960544bc",
            "seller_id": "seller_demo_004",
            "action_type": "FINANCING",
            "amount": 257850000.0,
            "status": "AWAITING_APPROVAL",
            "requires_human_approval": true,
            "expires_at": "2026-09-21T13:53:18.636131",
            "created_at": "2026-09-21T13:23:18.636416",
            "executed": false,
            "provider_reference": null
          },
          "created_at": "2026-09-21T13:23:18.636783"
        },
        {
          "tool_call_id": "tc_44a36ab1c8e84f04",
          "tool_name": "execute_approved_action",
          "agent": "execution",
          "step": 0,
          "success": true,
          "latency_ms": 2.606,
          "input_hash": "5e0bb854c8fd7f01d28a131be36194f5",
          "output_hash": "aae05f13628c0b077256d37673a3259a",
          "error_message": null,
          "input": {
            "action_id": "act_0ba3e945960544bc"
          },
          "output": {
            "action_id": "act_0ba3e945960544bc",
            "seller_id": "seller_demo_004",
            "action_type": "FINANCING",
            "amount": 257850000.0,
            "status": "EXECUTED",
            "requires_human_approval": false,
            "expires_at": null,
            "created_at": "2026-09-21T13:23:25.563333",
            "executed": true,
            "provider_reference": "mock_15af09641bfd45b2b094b71d6fb238f0"
          },
          "created_at": "2026-09-21T13:23:25.564996"
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
          "latency_ms": 0.508,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.621180"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 1.059,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.623323"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 2.442,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.627024"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.391,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.628878"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.509,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.630577"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.32,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.632017"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.435,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.633637"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.305,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.635119"
        },
        {
          "agent": "orchestrator",
          "step": 9,
          "model": null,
          "prompt_version": null,
          "tool_name": "create_action_proposal",
          "status": "OK",
          "latency_ms": 0.762,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:18.637077"
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
            "action_id": "act_0ba3e945960544bc",
            "explanation_source": "gemini",
            "tool_calls": 9,
            "degraded": false
          },
          "created_at": "2026-09-21T13:23:25.553888"
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
            "action_id": "act_0ba3e945960544bc",
            "execution_id": "exec_68ac5d1a55ab4d74",
            "amount": 257850000.0,
            "balance_delta": {
              "cash_used": 90000000.0,
              "supplier_credit_drawn": 80000000.0,
              "loan_drawn": 87850000.0,
              "inventory_value_added": 257850000.0
            }
          },
          "created_at": "2026-09-21T13:23:25.564545"
        },
        {
          "agent": "execution",
          "step": 0,
          "model": null,
          "prompt_version": null,
          "tool_name": "execute_approved_action",
          "status": "OK",
          "latency_ms": 2.606,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:25.565395"
        }
      ],
      "action": {
        "action_id": "act_0ba3e945960544bc",
        "workflow_id": "wf_3a2010710eab4053",
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
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
        },
        "created_at": "2026-09-21T13:23:18.636416",
        "approved_by": "admin",
        "approved_at": "2026-09-21T13:23:25.559364",
        "rejected_by": null,
        "rejected_at": null,
        "executed_at": "2026-09-21T13:23:25.563711",
        "expires_at": "2026-09-21T13:53:18.636131"
      },
      "execution": {
        "execution_id": "exec_68ac5d1a55ab4d74",
        "action_id": "act_0ba3e945960544bc",
        "seller_id": "seller_demo_004",
        "amount": 257850000.0,
        "execution_type": "MOCK_FINANCING",
        "provider": "bank_mock",
        "provider_reference": "mock_15af09641bfd45b2b094b71d6fb238f0",
        "status": "SUCCESS",
        "created_at": "2026-09-21T13:23:25.563333",
        "detail": {
          "execution_mode": "mock",
          "bank_id": "tpb",
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
    "wf_24da030f648f4d48": {
      "workflow_id": "wf_24da030f648f4d48",
      "seller_id": "seller_demo_003",
      "display_name": "Thoi Trang Ha My",
      "status": "POLICY_REJECTED",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T13:23:14.882885",
      "updated_at": "2026-09-21T13:23:18.617439",
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
          "tool_call_id": "tc_fa07a2c6d29840ab",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.658,
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
          "created_at": "2026-09-21T13:23:14.883740"
        },
        {
          "tool_call_id": "tc_48faf1f8ad094ea2",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 1.037,
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
          "created_at": "2026-09-21T13:23:14.885890"
        },
        {
          "tool_call_id": "tc_03227eee07244591",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 2.167,
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
          "created_at": "2026-09-21T13:23:14.889545"
        },
        {
          "tool_call_id": "tc_faf388f8534745a0",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.37,
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
          "created_at": "2026-09-21T13:23:14.891050"
        },
        {
          "tool_call_id": "tc_d6e8d6173ebf4a57",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.509,
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
          "created_at": "2026-09-21T13:23:14.892637"
        },
        {
          "tool_call_id": "tc_b9ecb996fba14ef2",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.3,
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
          "created_at": "2026-09-21T13:23:14.894129"
        },
        {
          "tool_call_id": "tc_b8a2d5b800914793",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.465,
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
          "created_at": "2026-09-21T13:23:14.896028"
        },
        {
          "tool_call_id": "tc_70ce6dd591ef4a46",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.509,
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
          "created_at": "2026-09-21T13:23:14.898936"
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
          "latency_ms": 0.658,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:14.884064"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 1.037,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:14.886365"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 2.167,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:14.889883"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.37,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:14.891388"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.509,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:14.892968"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.3,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:14.894567"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.465,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:14.896618"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.509,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:14.899506"
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
          "created_at": "2026-09-21T13:23:18.617844"
        }
      ],
      "action": null,
      "execution": null
    },
    "wf_ab7c004d0e534c26": {
      "workflow_id": "wf_ab7c004d0e534c26",
      "seller_id": "seller_demo_002",
      "display_name": "Dien May Tuan Phat",
      "status": "NO_ACTION_NEEDED",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T13:23:10.024698",
      "updated_at": "2026-09-21T13:23:14.879789",
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
          "tool_call_id": "tc_7cddbb59d13d480f",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.51,
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
          "created_at": "2026-09-21T13:23:10.025377"
        },
        {
          "tool_call_id": "tc_7e193e7d6414474f",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 0.878,
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
          "created_at": "2026-09-21T13:23:10.027221"
        },
        {
          "tool_call_id": "tc_1f81b126f2a74114",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 2.208,
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
          "created_at": "2026-09-21T13:23:10.030425"
        },
        {
          "tool_call_id": "tc_78f54bd2ea4041ec",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.231,
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
          "created_at": "2026-09-21T13:23:10.031688"
        },
        {
          "tool_call_id": "tc_fb35a70538024677",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.405,
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
          "created_at": "2026-09-21T13:23:10.033215"
        },
        {
          "tool_call_id": "tc_fff976116e054b6f",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.349,
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
          "created_at": "2026-09-21T13:23:10.034630"
        },
        {
          "tool_call_id": "tc_d45c3b7aea8242da",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.705,
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
          "created_at": "2026-09-21T13:23:10.036621"
        },
        {
          "tool_call_id": "tc_c09abe0cc3294572",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.267,
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
          "created_at": "2026-09-21T13:23:10.038575"
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
          "latency_ms": 0.51,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.025652"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 0.878,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.027521"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 2.208,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.030737"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.231,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.032001"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.405,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.033524"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.349,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.034958"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.705,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.037119"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.267,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.038867"
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
          "created_at": "2026-09-21T13:23:14.880274"
        }
      ],
      "action": null,
      "execution": null
    },
    "wf_e255ea46d47f4200": {
      "workflow_id": "wf_e255ea46d47f4200",
      "seller_id": "seller_demo_001",
      "display_name": "Nha Sach Minh Anh",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T13:23:02.882020",
      "updated_at": "2026-09-21T13:23:10.012436",
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
          "tool_call_id": "tc_e8b0e9a439b745ba",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 38.577,
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
          "created_at": "2026-09-21T13:23:02.920835"
        },
        {
          "tool_call_id": "tc_d46725b382a34cbb",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 1.021,
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
          "created_at": "2026-09-21T13:23:02.923682"
        },
        {
          "tool_call_id": "tc_01b48935e7c24f54",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 3.608,
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
          "created_at": "2026-09-21T13:23:02.928501"
        },
        {
          "tool_call_id": "tc_9b6aabd9d9c14696",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.421,
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
          "created_at": "2026-09-21T13:23:02.930510"
        },
        {
          "tool_call_id": "tc_69b1b72b375146e7",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.477,
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
          "created_at": "2026-09-21T13:23:02.932186"
        },
        {
          "tool_call_id": "tc_cc9ba0f358314b29",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.328,
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
          "created_at": "2026-09-21T13:23:02.933687"
        },
        {
          "tool_call_id": "tc_5e10540c41c44e40",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.424,
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
          "created_at": "2026-09-21T13:23:02.935310"
        },
        {
          "tool_call_id": "tc_89746ab59a924b10",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.283,
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
          "created_at": "2026-09-21T13:23:02.936838"
        },
        {
          "tool_call_id": "tc_b023d81231ab406e",
          "tool_name": "create_action_proposal",
          "agent": "orchestrator",
          "step": 9,
          "success": true,
          "latency_ms": 0.762,
          "input_hash": "ff6ab9608d9c901187ccd58453142373",
          "output_hash": "fba725fa50e65b88311b1e4a17837b55",
          "error_message": null,
          "input": {
            "seller_id": "seller_demo_001"
          },
          "output": {
            "action_id": "act_cc721481978f435c",
            "seller_id": "seller_demo_001",
            "action_type": "FINANCING",
            "amount": 137120000.0,
            "status": "AWAITING_APPROVAL",
            "requires_human_approval": true,
            "expires_at": "2026-09-21T13:53:02.938192",
            "created_at": "2026-09-21T13:23:02.938466",
            "executed": false,
            "provider_reference": null
          },
          "created_at": "2026-09-21T13:23:02.938834"
        },
        {
          "tool_call_id": "tc_53d03c2ee4794153",
          "tool_name": "execute_approved_action",
          "agent": "execution",
          "step": 0,
          "success": true,
          "latency_ms": 4.208,
          "input_hash": "a5999015ff40a4d3fcb7128ecb2e4be7",
          "output_hash": "edea5c1db3caa4edc3f8210b03de8018",
          "error_message": null,
          "input": {
            "action_id": "act_cc721481978f435c"
          },
          "output": {
            "action_id": "act_cc721481978f435c",
            "seller_id": "seller_demo_001",
            "action_type": "FINANCING",
            "amount": 137120000.0,
            "status": "EXECUTED",
            "requires_human_approval": false,
            "expires_at": null,
            "created_at": "2026-09-21T13:23:10.019123",
            "executed": true,
            "provider_reference": "mock_8f5bfefd15d742e7ae3e343dafb29c8c"
          },
          "created_at": "2026-09-21T13:23:10.021818"
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
          "latency_ms": 38.577,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.921561"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 1.021,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.924025"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 3.608,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.929112"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.421,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.930852"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.477,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.932533"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.328,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.934026"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.424,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.935654"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.283,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.937144"
        },
        {
          "agent": "orchestrator",
          "step": 9,
          "model": null,
          "prompt_version": null,
          "tool_name": "create_action_proposal",
          "status": "OK",
          "latency_ms": 0.762,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.939138"
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
            "action_id": "act_cc721481978f435c",
            "explanation_source": "gemini",
            "tool_calls": 9,
            "degraded": false
          },
          "created_at": "2026-09-21T13:23:10.012848"
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
            "action_id": "act_cc721481978f435c",
            "execution_id": "exec_3ced23d7859f4bba",
            "amount": 137120000.0,
            "balance_delta": {
              "cash_used": 30000000.0,
              "supplier_credit_drawn": 25000000.0,
              "loan_drawn": 82120000.0,
              "inventory_value_added": 137120000.0
            }
          },
          "created_at": "2026-09-21T13:23:10.021184"
        },
        {
          "agent": "execution",
          "step": 0,
          "model": null,
          "prompt_version": null,
          "tool_name": "execute_approved_action",
          "status": "OK",
          "latency_ms": 4.208,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:10.022158"
        }
      ],
      "action": {
        "action_id": "act_cc721481978f435c",
        "workflow_id": "wf_e255ea46d47f4200",
        "seller_id": "seller_demo_001",
        "action_type": "FINANCING",
        "amount": 137120000.0,
        "status": "EXECUTED",
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
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
        },
        "created_at": "2026-09-21T13:23:02.938466",
        "approved_by": "admin",
        "approved_at": "2026-09-21T13:23:10.015460",
        "rejected_by": null,
        "rejected_at": null,
        "executed_at": "2026-09-21T13:23:10.019830",
        "expires_at": "2026-09-21T13:53:02.938192"
      },
      "execution": {
        "execution_id": "exec_3ced23d7859f4bba",
        "action_id": "act_cc721481978f435c",
        "seller_id": "seller_demo_001",
        "amount": 137120000.0,
        "execution_type": "MOCK_FINANCING",
        "provider": "bank_mock",
        "provider_reference": "mock_8f5bfefd15d742e7ae3e343dafb29c8c",
        "status": "SUCCESS",
        "created_at": "2026-09-21T13:23:10.019123",
        "detail": {
          "execution_mode": "mock",
          "bank_id": "vcb",
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
          }
        }
      }
    },
    "wf_e95c33fa39994f3a": {
      "workflow_id": "wf_e95c33fa39994f3a",
      "seller_id": "shop_c_taphoa",
      "display_name": "Tạp Hóa Cô Ba",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T13:22:57.553865",
      "updated_at": "2026-09-21T13:23:02.844006",
      "facts": {
        "currency": "VND",
        "cash_balance": 38000000.0,
        "pending_marketplace_payout": 35000000.0,
        "open_loan_balance": 12000000.0,
        "supplier_payables": 40000000.0,
        "horizon_days": 30,
        "expected_sales": 732904553.57,
        "required_inventory_cost": 38115000.0,
        "projected_stockout_days": 4.4737,
        "forecast_confidence": 0.8994,
        "pd": 0.063511,
        "risk_band": "MEDIUM",
        "risk_score": 0.761179,
        "liquidity_score": 0.467949,
        "recommended_credit_limit": 108000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 38115000.0,
        "cash_amount": 8000000.0,
        "supplier_credit_amount": 5000000.0,
        "loan_amount": 25115000.0,
        "estimated_financing_cost": 419660.75,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED"
        ],
        "policy_approved": true,
        "requires_human_approval": true,
        "policy_reasons": [
          "WITHIN_LIMITS",
          "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
        ],
        "max_executable_amount": 38115000.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 5000000.0,
            "fee": 45000.0,
            "total_due": 5045000.0,
            "due_date": "2026-10-11",
            "tenor_days": 21
          },
          {
            "source": "bank_loan",
            "principal": 25115000.0,
            "fee": 374660.75,
            "total_due": 25489660.75,
            "due_date": "2026-10-20",
            "tenor_days": 30
          }
        ]
      },
      "forecast": {
        "seller_id": "shop_c_taphoa",
        "horizon_days": 30,
        "expected_sales": 732904553.57,
        "required_inventory_cost": 38115000.0,
        "projected_stockout_days": 4.4737,
        "confidence": 0.8994,
        "engine_version": "mock-forecast-v1",
        "sku_plan": [
          {
            "sku": "CB-GAO-25",
            "forecast_daily_units": 26.5768,
            "on_hand": 120,
            "lead_time_days": 4,
            "safety_stock_days": 3,
            "required_units": 187,
            "reorder_units": 67,
            "unit_cost": 320000.0,
            "reorder_cost": 21440000.0,
            "days_of_cover": 4.5152
          },
          {
            "sku": "CB-DAU-5L",
            "forecast_daily_units": 19.8411,
            "on_hand": 110,
            "lead_time_days": 4,
            "safety_stock_days": 3,
            "required_units": 139,
            "reorder_units": 29,
            "unit_cost": 245000.0,
            "reorder_cost": 7105000.0,
            "days_of_cover": 5.5441
          },
          {
            "sku": "CB-SUA-LOC",
            "forecast_daily_units": 38.0,
            "on_hand": 170,
            "lead_time_days": 3,
            "safety_stock_days": 3,
            "required_units": 228,
            "reorder_units": 58,
            "unit_cost": 165000.0,
            "reorder_cost": 9570000.0,
            "days_of_cover": 4.4737
          }
        ]
      },
      "risk": {
        "seller_id": "shop_c_taphoa",
        "pd": 0.063511,
        "liquidity_score": 0.467949,
        "risk_score": 0.761179,
        "recommended_limit": 108000000.0,
        "risk_band": "MEDIUM",
        "engine_version": "mock-risk-v1",
        "factors": {
          "liquidity_ratio": 1.403846,
          "liquidity_score": 0.467949,
          "sales_factor": 1.0,
          "leverage_ratio": 0.086667,
          "leverage_factor": 0.913333,
          "monthly_sales": 600000000.0,
          "bank_headroom": 108000000.0,
          "raw_limit_before_cap": 149969708.33
        }
      },
      "capital_plan": {
        "seller_id": "shop_c_taphoa",
        "total_need": 38115000.0,
        "cash_amount": 8000000.0,
        "supplier_credit_amount": 5000000.0,
        "loan_amount": 25115000.0,
        "estimated_financing_cost": 419660.75,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED"
        ],
        "funding_capacity": 121000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "cost_breakdown": {
          "cash": 0.0,
          "supplier_credit": 45000.0,
          "loan": 374660.75,
          "tenor_days": 30.0,
          "loan_cost_rate": 0.014918,
          "supplier_cost_rate": 0.009,
          "cash_capacity": 8000000.0,
          "supplier_capacity": 5000000.0,
          "loan_capacity": 108000000.0
        },
        "engine_version": "greedy-optimizer-v1"
      },
      "policy_decision": {
        "approved": true,
        "requires_human_approval": true,
        "reasons": [
          "WITHIN_LIMITS",
          "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
        ],
        "max_executable_amount": 38115000.0,
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
        "type": "STOCKOUT_RISK",
        "urgency": "LOW",
        "evidence": [
          "CB-GAO-25: 5.0 days of cover is below the 7-day reorder point",
          "CB-DAU-5L: 5.5 days of cover is below the 7-day reorder point",
          "CB-SUA-LOC: 5.2 days of cover is below the 6-day reorder point"
        ],
        "recommended_next_tool": "forecast_inventory_need"
      },
      "repayment_schedule": [
        {
          "source": "supplier_credit",
          "principal": 5000000.0,
          "fee": 45000.0,
          "total_due": 5045000.0,
          "due_date": "2026-10-11",
          "tenor_days": 21
        },
        {
          "source": "bank_loan",
          "principal": 25115000.0,
          "fee": 374660.75,
          "total_due": 25489660.75,
          "due_date": "2026-10-20",
          "tenor_days": 30
        }
      ],
      "seller_state_at_run": {
        "seller_id": "shop_c_taphoa",
        "display_name": "Tạp Hóa Cô Ba",
        "cash_balance": 38000000.0,
        "available_bank_credit": 120000000.0,
        "current_inventory_value": 48000000.0,
        "avg_daily_sales": 20000000.0,
        "pending_marketplace_payout": 35000000.0,
        "supplier_payables": 40000000.0,
        "open_loan_balance": 12000000.0,
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
        "step 9: create_action_proposal -> ok"
      ],
      "tool_calls": [
        {
          "tool_call_id": "tc_2903f91e74f646e6",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.622,
          "input_hash": "a97ab70339b857b12c540ed77a630991",
          "output_hash": "91b04858926d4e08f0499d70910fc1f0",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa"
          },
          "output": {
            "seller_id": "shop_c_taphoa",
            "display_name": "Tạp Hóa Cô Ba",
            "cash_balance": 38000000.0,
            "available_bank_credit": 120000000.0,
            "current_inventory_value": 48000000.0,
            "avg_daily_sales": 20000000.0,
            "pending_marketplace_payout": 35000000.0,
            "supplier_payables": 40000000.0,
            "open_loan_balance": 12000000.0,
            "currency": "VND",
            "expected_payout_date": "2026-09-24"
          },
          "created_at": "2026-09-21T13:22:57.554663"
        },
        {
          "tool_call_id": "tc_78dda4c45f2949ae",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 1.053,
          "input_hash": "a97ab70339b857b12c540ed77a630991",
          "output_hash": "4c083b28699907be31ed7ff850e92690",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa"
          },
          "output": {
            "seller_id": "shop_c_taphoa",
            "reference_date": "2026-09-20",
            "items": [
              {
                "sku": "CB-GAO-25",
                "on_hand": 120,
                "avg_daily_units": 24.0,
                "unit_cost": 320000.0,
                "supplier_lead_time_days": 4
              },
              {
                "sku": "CB-DAU-5L",
                "on_hand": 110,
                "avg_daily_units": 20.0,
                "unit_cost": 245000.0,
                "supplier_lead_time_days": 4
              },
              {
                "sku": "CB-SUA-LOC",
                "on_hand": 170,
                "avg_daily_units": 33.0,
                "unit_cost": 165000.0,
                "supplier_lead_time_days": 3
              }
            ]
          },
          "created_at": "2026-09-21T13:22:57.556933"
        },
        {
          "tool_call_id": "tc_b9552e837bf64b5d",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 2.493,
          "input_hash": "a97ab70339b857b12c540ed77a630991",
          "output_hash": "288797d8ab360927ff85d41f48f6dcc5",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa"
          },
          "output": {
            "seller_id": "shop_c_taphoa",
            "lookback_days": 30,
            "reference_date": "2026-09-20",
            "total_orders": 90,
            "total_units": 2418,
            "gross_revenue": 698060000.0,
            "avg_daily_revenue": 23268666.67,
            "recent_7d_avg_daily_revenue": 25933571.43,
            "previous_7d_avg_daily_revenue": 23561428.57,
            "revenue_trend_pct": 10.07,
            "units_by_sku": {
              "CB-DAU-5L": 589,
              "CB-GAO-25": 742,
              "CB-SUA-LOC": 1087
            }
          },
          "created_at": "2026-09-21T13:22:57.560557"
        },
        {
          "tool_call_id": "tc_1068fac0008047f4",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.305,
          "input_hash": "a97ab70339b857b12c540ed77a630991",
          "output_hash": "d331e0d79e0442beae3e3af95b0b7e9e",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa"
          },
          "output": {
            "supplier_id": "ncc_c_01",
            "seller_id": "shop_c_taphoa",
            "credit_limit": 45000000.0,
            "credit_days": 21,
            "lead_time_days": 4,
            "fee_rate": 0.009
          },
          "created_at": "2026-09-21T13:22:57.562006"
        },
        {
          "tool_call_id": "tc_f8184f630c424944",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.636,
          "input_hash": "0831b402afbd9d8e6d0a6e66597aa70d",
          "output_hash": "907b22fe3a171e591d30f18df9a83f37",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa",
            "horizon_days": 30
          },
          "output": {
            "seller_id": "shop_c_taphoa",
            "horizon_days": 30,
            "expected_sales": 732904553.57,
            "required_inventory_cost": 38115000.0,
            "projected_stockout_days": 4.4737,
            "confidence": 0.8994,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "CB-GAO-25",
                "forecast_daily_units": 26.5768,
                "on_hand": 120,
                "lead_time_days": 4,
                "safety_stock_days": 3,
                "required_units": 187,
                "reorder_units": 67,
                "unit_cost": 320000.0,
                "reorder_cost": 21440000.0,
                "days_of_cover": 4.5152
              },
              {
                "sku": "CB-DAU-5L",
                "forecast_daily_units": 19.8411,
                "on_hand": 110,
                "lead_time_days": 4,
                "safety_stock_days": 3,
                "required_units": 139,
                "reorder_units": 29,
                "unit_cost": 245000.0,
                "reorder_cost": 7105000.0,
                "days_of_cover": 5.5441
              },
              {
                "sku": "CB-SUA-LOC",
                "forecast_daily_units": 38.0,
                "on_hand": 170,
                "lead_time_days": 3,
                "safety_stock_days": 3,
                "required_units": 228,
                "reorder_units": 58,
                "unit_cost": 165000.0,
                "reorder_cost": 9570000.0,
                "days_of_cover": 4.4737
              }
            ]
          },
          "created_at": "2026-09-21T13:22:57.563752"
        },
        {
          "tool_call_id": "tc_36f776a5e51e4d1e",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.545,
          "input_hash": "a97ab70339b857b12c540ed77a630991",
          "output_hash": "4887c1dd4410e16fa5ab87149a33db9e",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa"
          },
          "output": {
            "seller_id": "shop_c_taphoa",
            "pd": 0.063511,
            "liquidity_score": 0.467949,
            "risk_score": 0.761179,
            "recommended_limit": 108000000.0,
            "risk_band": "MEDIUM",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 1.403846,
              "liquidity_score": 0.467949,
              "sales_factor": 1.0,
              "leverage_ratio": 0.086667,
              "leverage_factor": 0.913333,
              "monthly_sales": 600000000.0,
              "bank_headroom": 108000000.0,
              "raw_limit_before_cap": 149969708.33
            }
          },
          "created_at": "2026-09-21T13:22:57.566145"
        },
        {
          "tool_call_id": "tc_cd85e9f67ce54491",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.389,
          "input_hash": "a97ab70339b857b12c540ed77a630991",
          "output_hash": "036fa202d45fe54a3871e3c36f0b4bf0",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa"
          },
          "output": {
            "seller_id": "shop_c_taphoa",
            "total_need": 38115000.0,
            "cash_amount": 8000000.0,
            "supplier_credit_amount": 5000000.0,
            "loan_amount": 25115000.0,
            "estimated_financing_cost": 419660.75,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED"
            ],
            "funding_capacity": 121000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 45000.0,
              "loan": 374660.75,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.014918,
              "supplier_cost_rate": 0.009,
              "cash_capacity": 8000000.0,
              "supplier_capacity": 5000000.0,
              "loan_capacity": 108000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "created_at": "2026-09-21T13:22:57.568327"
        },
        {
          "tool_call_id": "tc_3962445905a54139",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.289,
          "input_hash": "a97ab70339b857b12c540ed77a630991",
          "output_hash": "1ac1569d20c18cbb81d9c3b37b14c172",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa"
          },
          "output": {
            "approved": true,
            "requires_human_approval": true,
            "reasons": [
              "WITHIN_LIMITS",
              "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
            ],
            "max_executable_amount": 38115000.0,
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
          "created_at": "2026-09-21T13:22:57.569812"
        },
        {
          "tool_call_id": "tc_903ee78c40024266",
          "tool_name": "create_action_proposal",
          "agent": "orchestrator",
          "step": 9,
          "success": true,
          "latency_ms": 0.758,
          "input_hash": "a97ab70339b857b12c540ed77a630991",
          "output_hash": "7a6a18a5c02384fdead9d07cfc113fa6",
          "error_message": null,
          "input": {
            "seller_id": "shop_c_taphoa"
          },
          "output": {
            "action_id": "act_4013457b7cc44c92",
            "seller_id": "shop_c_taphoa",
            "action_type": "FINANCING",
            "amount": 38115000.0,
            "status": "AWAITING_APPROVAL",
            "requires_human_approval": true,
            "expires_at": "2026-09-21T13:52:57.571150",
            "created_at": "2026-09-21T13:22:57.571461",
            "executed": false,
            "provider_reference": null
          },
          "created_at": "2026-09-21T13:22:57.571753"
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
          "latency_ms": 0.622,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.555015"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 1.053,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.557277"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 2.493,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.560896"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.305,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.562315"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.636,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.564135"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.545,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.566796"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.389,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.568629"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.289,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.570105"
        },
        {
          "agent": "orchestrator",
          "step": 9,
          "model": null,
          "prompt_version": null,
          "tool_name": "create_action_proposal",
          "status": "OK",
          "latency_ms": 0.758,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:57.572015"
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
            "action_id": "act_4013457b7cc44c92",
            "explanation_source": "gemini",
            "tool_calls": 9,
            "degraded": false
          },
          "created_at": "2026-09-21T13:23:02.844457"
        }
      ],
      "action": {
        "action_id": "act_4013457b7cc44c92",
        "workflow_id": "wf_e95c33fa39994f3a",
        "seller_id": "shop_c_taphoa",
        "action_type": "FINANCING",
        "amount": 38115000.0,
        "status": "AWAITING_APPROVAL",
        "policy_decision": {
          "approved": true,
          "requires_human_approval": true,
          "reasons": [
            "WITHIN_LIMITS",
            "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
          ],
          "max_executable_amount": 38115000.0,
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
            "seller_id": "shop_c_taphoa",
            "total_need": 38115000.0,
            "cash_amount": 8000000.0,
            "supplier_credit_amount": 5000000.0,
            "loan_amount": 25115000.0,
            "estimated_financing_cost": 419660.75,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED"
            ],
            "funding_capacity": 121000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 45000.0,
              "loan": 374660.75,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.014918,
              "supplier_cost_rate": 0.009,
              "cash_capacity": 8000000.0,
              "supplier_capacity": 5000000.0,
              "loan_capacity": 108000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "forecast": {
            "seller_id": "shop_c_taphoa",
            "horizon_days": 30,
            "expected_sales": 732904553.57,
            "required_inventory_cost": 38115000.0,
            "projected_stockout_days": 4.4737,
            "confidence": 0.8994,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "CB-GAO-25",
                "forecast_daily_units": 26.5768,
                "on_hand": 120,
                "lead_time_days": 4,
                "safety_stock_days": 3,
                "required_units": 187,
                "reorder_units": 67,
                "unit_cost": 320000.0,
                "reorder_cost": 21440000.0,
                "days_of_cover": 4.5152
              },
              {
                "sku": "CB-DAU-5L",
                "forecast_daily_units": 19.8411,
                "on_hand": 110,
                "lead_time_days": 4,
                "safety_stock_days": 3,
                "required_units": 139,
                "reorder_units": 29,
                "unit_cost": 245000.0,
                "reorder_cost": 7105000.0,
                "days_of_cover": 5.5441
              },
              {
                "sku": "CB-SUA-LOC",
                "forecast_daily_units": 38.0,
                "on_hand": 170,
                "lead_time_days": 3,
                "safety_stock_days": 3,
                "required_units": 228,
                "reorder_units": 58,
                "unit_cost": 165000.0,
                "reorder_cost": 9570000.0,
                "days_of_cover": 4.4737
              }
            ]
          },
          "risk": {
            "seller_id": "shop_c_taphoa",
            "pd": 0.063511,
            "liquidity_score": 0.467949,
            "risk_score": 0.761179,
            "recommended_limit": 108000000.0,
            "risk_band": "MEDIUM",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 1.403846,
              "liquidity_score": 0.467949,
              "sales_factor": 1.0,
              "leverage_ratio": 0.086667,
              "leverage_factor": 0.913333,
              "monthly_sales": 600000000.0,
              "bank_headroom": 108000000.0,
              "raw_limit_before_cap": 149969708.33
            }
          },
          "supplier_terms": {
            "supplier_id": "ncc_c_01",
            "seller_id": "shop_c_taphoa",
            "credit_limit": 45000000.0,
            "credit_days": 21,
            "lead_time_days": 4,
            "fee_rate": 0.009
          },
          "repayment_schedule": [
            {
              "source": "supplier_credit",
              "principal": 5000000.0,
              "fee": 45000.0,
              "total_due": 5045000.0,
              "due_date": "2026-10-11",
              "tenor_days": 21
            },
            {
              "source": "bank_loan",
              "principal": 25115000.0,
              "fee": 374660.75,
              "total_due": 25489660.75,
              "due_date": "2026-10-20",
              "tenor_days": 30
            }
          ],
          "facts": {
            "currency": "VND",
            "cash_balance": 38000000.0,
            "pending_marketplace_payout": 35000000.0,
            "open_loan_balance": 12000000.0,
            "supplier_payables": 40000000.0,
            "horizon_days": 30,
            "expected_sales": 732904553.57,
            "required_inventory_cost": 38115000.0,
            "projected_stockout_days": 4.4737,
            "forecast_confidence": 0.8994,
            "pd": 0.063511,
            "risk_band": "MEDIUM",
            "risk_score": 0.761179,
            "liquidity_score": 0.467949,
            "recommended_credit_limit": 108000000.0,
            "risk_engine_version": "mock-risk-v1",
            "capital_need": 38115000.0,
            "cash_amount": 8000000.0,
            "supplier_credit_amount": 5000000.0,
            "loan_amount": 25115000.0,
            "estimated_financing_cost": 419660.75,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED"
            ],
            "policy_approved": true,
            "requires_human_approval": true,
            "policy_reasons": [
              "WITHIN_LIMITS",
              "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
            ],
            "max_executable_amount": 38115000.0,
            "repayment_schedule": [
              {
                "source": "supplier_credit",
                "principal": 5000000.0,
                "fee": 45000.0,
                "total_due": 5045000.0,
                "due_date": "2026-10-11",
                "tenor_days": 21
              },
              {
                "source": "bank_loan",
                "principal": 25115000.0,
                "fee": 374660.75,
                "total_due": 25489660.75,
                "due_date": "2026-10-20",
                "tenor_days": 30
              }
            ]
          },
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
        },
        "created_at": "2026-09-21T13:22:57.571461",
        "approved_by": null,
        "approved_at": null,
        "rejected_by": null,
        "rejected_at": null,
        "executed_at": null,
        "expires_at": "2026-09-21T13:52:57.571150"
      },
      "execution": null
    },
    "wf_9289739c49f143e1": {
      "workflow_id": "wf_9289739c49f143e1",
      "seller_id": "shop_b_mympham",
      "display_name": "Mỹ Phẩm Hà Linh",
      "status": "WAITING_APPROVAL",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T13:22:52.175616",
      "updated_at": "2026-09-21T13:22:57.522100",
      "facts": {
        "currency": "VND",
        "cash_balance": 52000000.0,
        "pending_marketplace_payout": 35000000.0,
        "open_loan_balance": 15000000.0,
        "supplier_payables": 28000000.0,
        "horizon_days": 30,
        "expected_sales": 854745000.0,
        "required_inventory_cost": 85540000.0,
        "projected_stockout_days": 7.7651,
        "forecast_confidence": 0.8722,
        "pd": 0.040959,
        "risk_band": "MEDIUM",
        "risk_score": 0.853229,
        "liquidity_score": 0.674419,
        "recommended_credit_limit": 185000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 85540000.0,
        "cash_amount": 22000000.0,
        "supplier_credit_amount": 52000000.0,
        "loan_amount": 11540000.0,
        "estimated_financing_cost": 453641.64,
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
        "max_executable_amount": 85540000.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 52000000.0,
            "fee": 312000.0,
            "total_due": 52312000.0,
            "due_date": "2026-10-20",
            "tenor_days": 30
          },
          {
            "source": "bank_loan",
            "principal": 11540000.0,
            "fee": 141641.64,
            "total_due": 11681641.64,
            "due_date": "2026-10-20",
            "tenor_days": 30
          }
        ]
      },
      "forecast": {
        "seller_id": "shop_b_mympham",
        "horizon_days": 30,
        "expected_sales": 854745000.0,
        "required_inventory_cost": 85540000.0,
        "projected_stockout_days": 7.7651,
        "confidence": 0.8722,
        "engine_version": "mock-forecast-v1",
        "sku_plan": [
          {
            "sku": "HL-SERUM",
            "forecast_daily_units": 21.8929,
            "on_hand": 170,
            "lead_time_days": 9,
            "safety_stock_days": 3,
            "required_units": 263,
            "reorder_units": 93,
            "unit_cost": 420000.0,
            "reorder_cost": 39060000.0,
            "days_of_cover": 7.7651
          },
          {
            "sku": "HL-KEM",
            "forecast_daily_units": 15.2107,
            "on_hand": 130,
            "lead_time_days": 11,
            "safety_stock_days": 3,
            "required_units": 213,
            "reorder_units": 83,
            "unit_cost": 560000.0,
            "reorder_cost": 46480000.0,
            "days_of_cover": 8.5466
          }
        ]
      },
      "risk": {
        "seller_id": "shop_b_mympham",
        "pd": 0.040959,
        "liquidity_score": 0.674419,
        "risk_score": 0.853229,
        "recommended_limit": 185000000.0,
        "risk_band": "MEDIUM",
        "engine_version": "mock-risk-v1",
        "factors": {
          "liquidity_ratio": 2.023256,
          "liquidity_score": 0.674419,
          "sales_factor": 1.0,
          "leverage_ratio": 0.055128,
          "leverage_factor": 0.944872,
          "monthly_sales": 780000000.0,
          "bank_headroom": 185000000.0,
          "raw_limit_before_cap": 260430481.4
        }
      },
      "capital_plan": {
        "seller_id": "shop_b_mympham",
        "total_need": 85540000.0,
        "cash_amount": 22000000.0,
        "supplier_credit_amount": 52000000.0,
        "loan_amount": 11540000.0,
        "estimated_financing_cost": 453641.64,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "funding_capacity": 259000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "cost_breakdown": {
          "cash": 0.0,
          "supplier_credit": 312000.0,
          "loan": 141641.64,
          "tenor_days": 30.0,
          "loan_cost_rate": 0.012274,
          "supplier_cost_rate": 0.006,
          "cash_capacity": 22000000.0,
          "supplier_capacity": 52000000.0,
          "loan_capacity": 185000000.0
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
        "max_executable_amount": 85540000.0,
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
          "HL-SERUM: 8.5 days of cover is below the 9-day supplier lead time",
          "HL-KEM: 9.3 days of cover is below the 11-day supplier lead time"
        ],
        "recommended_next_tool": "forecast_inventory_need"
      },
      "repayment_schedule": [
        {
          "source": "supplier_credit",
          "principal": 52000000.0,
          "fee": 312000.0,
          "total_due": 52312000.0,
          "due_date": "2026-10-20",
          "tenor_days": 30
        },
        {
          "source": "bank_loan",
          "principal": 11540000.0,
          "fee": 141641.64,
          "total_due": 11681641.64,
          "due_date": "2026-10-20",
          "tenor_days": 30
        }
      ],
      "seller_state_at_run": {
        "seller_id": "shop_b_mympham",
        "display_name": "Mỹ Phẩm Hà Linh",
        "cash_balance": 52000000.0,
        "available_bank_credit": 200000000.0,
        "current_inventory_value": 95000000.0,
        "avg_daily_sales": 26000000.0,
        "pending_marketplace_payout": 35000000.0,
        "supplier_payables": 28000000.0,
        "open_loan_balance": 15000000.0,
        "currency": "VND",
        "expected_payout_date": "2026-09-26"
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
          "tool_call_id": "tc_dae1587a1c5e4487",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.462,
          "input_hash": "cc56555c78cd463b4ce647b90d38c8d8",
          "output_hash": "41ed56852a523ab786623e7d8e4983b4",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham"
          },
          "output": {
            "seller_id": "shop_b_mympham",
            "display_name": "Mỹ Phẩm Hà Linh",
            "cash_balance": 52000000.0,
            "available_bank_credit": 200000000.0,
            "current_inventory_value": 95000000.0,
            "avg_daily_sales": 26000000.0,
            "pending_marketplace_payout": 35000000.0,
            "supplier_payables": 28000000.0,
            "open_loan_balance": 15000000.0,
            "currency": "VND",
            "expected_payout_date": "2026-09-26"
          },
          "created_at": "2026-09-21T13:22:52.176248"
        },
        {
          "tool_call_id": "tc_3886e4295f234ef6",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 0.87,
          "input_hash": "cc56555c78cd463b4ce647b90d38c8d8",
          "output_hash": "e0763f3f108d5ec28f39ea5518240dd7",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham"
          },
          "output": {
            "seller_id": "shop_b_mympham",
            "reference_date": "2026-09-20",
            "items": [
              {
                "sku": "HL-SERUM",
                "on_hand": 170,
                "avg_daily_units": 20.0,
                "unit_cost": 420000.0,
                "supplier_lead_time_days": 9
              },
              {
                "sku": "HL-KEM",
                "on_hand": 130,
                "avg_daily_units": 14.0,
                "unit_cost": 560000.0,
                "supplier_lead_time_days": 11
              }
            ]
          },
          "created_at": "2026-09-21T13:22:52.178156"
        },
        {
          "tool_call_id": "tc_e877903b181042cf",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 1.851,
          "input_hash": "cc56555c78cd463b4ce647b90d38c8d8",
          "output_hash": "d9cf194246464e13002cc18695efb56b",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham"
          },
          "output": {
            "seller_id": "shop_b_mympham",
            "lookback_days": 30,
            "reference_date": "2026-09-20",
            "total_orders": 60,
            "total_units": 1022,
            "gross_revenue": 784980000.0,
            "avg_daily_revenue": 26166000.0,
            "recent_7d_avg_daily_revenue": 30972857.14,
            "previous_7d_avg_daily_revenue": 27778571.43,
            "revenue_trend_pct": 11.5,
            "units_by_sku": {
              "HL-KEM": 420,
              "HL-SERUM": 602
            }
          },
          "created_at": "2026-09-21T13:22:52.181097"
        },
        {
          "tool_call_id": "tc_4d4464e04bbf40a1",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.334,
          "input_hash": "cc56555c78cd463b4ce647b90d38c8d8",
          "output_hash": "72288eedc3cb5723ee7bdded6c4cf0c3",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham"
          },
          "output": {
            "supplier_id": "ncc_b_01",
            "seller_id": "shop_b_mympham",
            "credit_limit": 80000000.0,
            "credit_days": 30,
            "lead_time_days": 9,
            "fee_rate": 0.006
          },
          "created_at": "2026-09-21T13:22:52.182492"
        },
        {
          "tool_call_id": "tc_1b42485d97454f51",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.409,
          "input_hash": "37b80b8b5af9d54f70bef09d0a6595b2",
          "output_hash": "c1d33b781ece772b298045936a566e60",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham",
            "horizon_days": 30
          },
          "output": {
            "seller_id": "shop_b_mympham",
            "horizon_days": 30,
            "expected_sales": 854745000.0,
            "required_inventory_cost": 85540000.0,
            "projected_stockout_days": 7.7651,
            "confidence": 0.8722,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "HL-SERUM",
                "forecast_daily_units": 21.8929,
                "on_hand": 170,
                "lead_time_days": 9,
                "safety_stock_days": 3,
                "required_units": 263,
                "reorder_units": 93,
                "unit_cost": 420000.0,
                "reorder_cost": 39060000.0,
                "days_of_cover": 7.7651
              },
              {
                "sku": "HL-KEM",
                "forecast_daily_units": 15.2107,
                "on_hand": 130,
                "lead_time_days": 11,
                "safety_stock_days": 3,
                "required_units": 213,
                "reorder_units": 83,
                "unit_cost": 560000.0,
                "reorder_cost": 46480000.0,
                "days_of_cover": 8.5466
              }
            ]
          },
          "created_at": "2026-09-21T13:22:52.183958"
        },
        {
          "tool_call_id": "tc_7b940993746c4681",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.338,
          "input_hash": "cc56555c78cd463b4ce647b90d38c8d8",
          "output_hash": "4275086da20602c7372ff3486b6ddc9f",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham"
          },
          "output": {
            "seller_id": "shop_b_mympham",
            "pd": 0.040959,
            "liquidity_score": 0.674419,
            "risk_score": 0.853229,
            "recommended_limit": 185000000.0,
            "risk_band": "MEDIUM",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 2.023256,
              "liquidity_score": 0.674419,
              "sales_factor": 1.0,
              "leverage_ratio": 0.055128,
              "leverage_factor": 0.944872,
              "monthly_sales": 780000000.0,
              "bank_headroom": 185000000.0,
              "raw_limit_before_cap": 260430481.4
            }
          },
          "created_at": "2026-09-21T13:22:52.185373"
        },
        {
          "tool_call_id": "tc_05a439d4ab4f4549",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.495,
          "input_hash": "cc56555c78cd463b4ce647b90d38c8d8",
          "output_hash": "5ca2d4de30c6439eb3a09506b0d2f6c0",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham"
          },
          "output": {
            "seller_id": "shop_b_mympham",
            "total_need": 85540000.0,
            "cash_amount": 22000000.0,
            "supplier_credit_amount": 52000000.0,
            "loan_amount": 11540000.0,
            "estimated_financing_cost": 453641.64,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 259000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 312000.0,
              "loan": 141641.64,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.012274,
              "supplier_cost_rate": 0.006,
              "cash_capacity": 22000000.0,
              "supplier_capacity": 52000000.0,
              "loan_capacity": 185000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "created_at": "2026-09-21T13:22:52.187022"
        },
        {
          "tool_call_id": "tc_f02016ce55554b5e",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.358,
          "input_hash": "cc56555c78cd463b4ce647b90d38c8d8",
          "output_hash": "14ea5e39df07b6a4e31386e6d4e818c8",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham"
          },
          "output": {
            "approved": true,
            "requires_human_approval": true,
            "reasons": [
              "WITHIN_LIMITS",
              "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
              "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
            ],
            "max_executable_amount": 85540000.0,
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
          "created_at": "2026-09-21T13:22:52.188931"
        },
        {
          "tool_call_id": "tc_6367e2bc5ae04a0f",
          "tool_name": "create_action_proposal",
          "agent": "orchestrator",
          "step": 9,
          "success": true,
          "latency_ms": 0.804,
          "input_hash": "cc56555c78cd463b4ce647b90d38c8d8",
          "output_hash": "695bfbd8d2bfc53b0c0d4fdbdd76a49f",
          "error_message": null,
          "input": {
            "seller_id": "shop_b_mympham"
          },
          "output": {
            "action_id": "act_4a33f2ff28cf4d8c",
            "seller_id": "shop_b_mympham",
            "action_type": "FINANCING",
            "amount": 85540000.0,
            "status": "AWAITING_APPROVAL",
            "requires_human_approval": true,
            "expires_at": "2026-09-21T13:52:52.190561",
            "created_at": "2026-09-21T13:22:52.190832",
            "executed": false,
            "provider_reference": null
          },
          "created_at": "2026-09-21T13:22:52.191225"
        },
        {
          "tool_call_id": "tc_6826b0eb3744451d",
          "tool_name": "execute_approved_action",
          "agent": "execution",
          "step": 0,
          "success": true,
          "latency_ms": 4.403,
          "input_hash": "e03c5358abf788fd166db6fe2cc86733",
          "output_hash": "32cdef85dbb636907441591d028b753c",
          "error_message": null,
          "input": {
            "action_id": "act_4a33f2ff28cf4d8c"
          },
          "output": {
            "action_id": "act_4a33f2ff28cf4d8c",
            "seller_id": "shop_b_mympham",
            "action_type": "FINANCING",
            "amount": 85540000.0,
            "status": "EXECUTED",
            "requires_human_approval": false,
            "expires_at": null,
            "created_at": "2026-09-21T13:23:02.872701",
            "executed": true,
            "provider_reference": "mock_75e8868cd1024bfab52b68d011f53530"
          },
          "created_at": "2026-09-21T13:23:02.874669"
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
          "latency_ms": 0.462,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.176564"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 0.87,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.178496"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 1.851,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.181429"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.334,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.182804"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.409,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.184274"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.338,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.185695"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.495,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.187401"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.358,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.189322"
        },
        {
          "agent": "orchestrator",
          "step": 9,
          "model": null,
          "prompt_version": null,
          "tool_name": "create_action_proposal",
          "status": "OK",
          "latency_ms": 0.804,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:52.191515"
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
            "action_id": "act_4a33f2ff28cf4d8c",
            "explanation_source": "gemini",
            "tool_calls": 9,
            "degraded": false
          },
          "created_at": "2026-09-21T13:22:57.522514"
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
            "action_id": "act_4a33f2ff28cf4d8c",
            "execution_id": "exec_8eda9099520d425a",
            "amount": 85540000.0,
            "balance_delta": {
              "cash_used": 22000000.0,
              "supplier_credit_drawn": 52000000.0,
              "loan_drawn": 11540000.0,
              "inventory_value_added": 85540000.0
            }
          },
          "created_at": "2026-09-21T13:23:02.874262"
        },
        {
          "agent": "execution",
          "step": 0,
          "model": null,
          "prompt_version": null,
          "tool_name": "execute_approved_action",
          "status": "OK",
          "latency_ms": 4.403,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:23:02.874988"
        }
      ],
      "action": {
        "action_id": "act_4a33f2ff28cf4d8c",
        "workflow_id": "wf_9289739c49f143e1",
        "seller_id": "shop_b_mympham",
        "action_type": "FINANCING",
        "amount": 85540000.0,
        "status": "EXECUTED",
        "policy_decision": {
          "approved": true,
          "requires_human_approval": true,
          "reasons": [
            "WITHIN_LIMITS",
            "AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD",
            "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
          ],
          "max_executable_amount": 85540000.0,
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
            "seller_id": "shop_b_mympham",
            "total_need": 85540000.0,
            "cash_amount": 22000000.0,
            "supplier_credit_amount": 52000000.0,
            "loan_amount": 11540000.0,
            "estimated_financing_cost": 453641.64,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 259000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 312000.0,
              "loan": 141641.64,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.012274,
              "supplier_cost_rate": 0.006,
              "cash_capacity": 22000000.0,
              "supplier_capacity": 52000000.0,
              "loan_capacity": 185000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "forecast": {
            "seller_id": "shop_b_mympham",
            "horizon_days": 30,
            "expected_sales": 854745000.0,
            "required_inventory_cost": 85540000.0,
            "projected_stockout_days": 7.7651,
            "confidence": 0.8722,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "HL-SERUM",
                "forecast_daily_units": 21.8929,
                "on_hand": 170,
                "lead_time_days": 9,
                "safety_stock_days": 3,
                "required_units": 263,
                "reorder_units": 93,
                "unit_cost": 420000.0,
                "reorder_cost": 39060000.0,
                "days_of_cover": 7.7651
              },
              {
                "sku": "HL-KEM",
                "forecast_daily_units": 15.2107,
                "on_hand": 130,
                "lead_time_days": 11,
                "safety_stock_days": 3,
                "required_units": 213,
                "reorder_units": 83,
                "unit_cost": 560000.0,
                "reorder_cost": 46480000.0,
                "days_of_cover": 8.5466
              }
            ]
          },
          "risk": {
            "seller_id": "shop_b_mympham",
            "pd": 0.040959,
            "liquidity_score": 0.674419,
            "risk_score": 0.853229,
            "recommended_limit": 185000000.0,
            "risk_band": "MEDIUM",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 2.023256,
              "liquidity_score": 0.674419,
              "sales_factor": 1.0,
              "leverage_ratio": 0.055128,
              "leverage_factor": 0.944872,
              "monthly_sales": 780000000.0,
              "bank_headroom": 185000000.0,
              "raw_limit_before_cap": 260430481.4
            }
          },
          "supplier_terms": {
            "supplier_id": "ncc_b_01",
            "seller_id": "shop_b_mympham",
            "credit_limit": 80000000.0,
            "credit_days": 30,
            "lead_time_days": 9,
            "fee_rate": 0.006
          },
          "repayment_schedule": [
            {
              "source": "supplier_credit",
              "principal": 52000000.0,
              "fee": 312000.0,
              "total_due": 52312000.0,
              "due_date": "2026-10-20",
              "tenor_days": 30
            },
            {
              "source": "bank_loan",
              "principal": 11540000.0,
              "fee": 141641.64,
              "total_due": 11681641.64,
              "due_date": "2026-10-20",
              "tenor_days": 30
            }
          ],
          "facts": {
            "currency": "VND",
            "cash_balance": 52000000.0,
            "pending_marketplace_payout": 35000000.0,
            "open_loan_balance": 15000000.0,
            "supplier_payables": 28000000.0,
            "horizon_days": 30,
            "expected_sales": 854745000.0,
            "required_inventory_cost": 85540000.0,
            "projected_stockout_days": 7.7651,
            "forecast_confidence": 0.8722,
            "pd": 0.040959,
            "risk_band": "MEDIUM",
            "risk_score": 0.853229,
            "liquidity_score": 0.674419,
            "recommended_credit_limit": 185000000.0,
            "risk_engine_version": "mock-risk-v1",
            "capital_need": 85540000.0,
            "cash_amount": 22000000.0,
            "supplier_credit_amount": 52000000.0,
            "loan_amount": 11540000.0,
            "estimated_financing_cost": 453641.64,
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
            "max_executable_amount": 85540000.0,
            "repayment_schedule": [
              {
                "source": "supplier_credit",
                "principal": 52000000.0,
                "fee": 312000.0,
                "total_due": 52312000.0,
                "due_date": "2026-10-20",
                "tenor_days": 30
              },
              {
                "source": "bank_loan",
                "principal": 11540000.0,
                "fee": 141641.64,
                "total_due": 11681641.64,
                "due_date": "2026-10-20",
                "tenor_days": 30
              }
            ]
          },
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
        },
        "created_at": "2026-09-21T13:22:52.190832",
        "approved_by": "admin",
        "approved_at": "2026-09-21T13:23:02.867910",
        "rejected_by": null,
        "rejected_at": null,
        "executed_at": "2026-09-21T13:23:02.873129",
        "expires_at": "2026-09-21T13:52:52.190561"
      },
      "execution": {
        "execution_id": "exec_8eda9099520d425a",
        "action_id": "act_4a33f2ff28cf4d8c",
        "seller_id": "shop_b_mympham",
        "amount": 85540000.0,
        "execution_type": "MOCK_FINANCING",
        "provider": "bank_mock",
        "provider_reference": "mock_75e8868cd1024bfab52b68d011f53530",
        "status": "SUCCESS",
        "created_at": "2026-09-21T13:23:02.872701",
        "detail": {
          "execution_mode": "mock",
          "bank_id": "tpb",
          "capital_plan": {
            "seller_id": "shop_b_mympham",
            "total_need": 85540000.0,
            "cash_amount": 22000000.0,
            "supplier_credit_amount": 52000000.0,
            "loan_amount": 11540000.0,
            "estimated_financing_cost": 453641.64,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 259000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 312000.0,
              "loan": 141641.64,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.012274,
              "supplier_cost_rate": 0.006,
              "cash_capacity": 22000000.0,
              "supplier_capacity": 52000000.0,
              "loan_capacity": 185000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          }
        }
      }
    },
    "wf_28cff625554244a4": {
      "workflow_id": "wf_28cff625554244a4",
      "seller_id": "shop_d_linhkien",
      "display_name": "Linh Kiện Đức Minh",
      "status": "POLICY_REJECTED",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T13:22:48.598385",
      "updated_at": "2026-09-21T13:22:52.147559",
      "facts": {
        "currency": "VND",
        "cash_balance": 18000000.0,
        "pending_marketplace_payout": 7000000.0,
        "open_loan_balance": 75000000.0,
        "supplier_payables": 140000000.0,
        "horizon_days": 30,
        "expected_sales": 615633214.29,
        "required_inventory_cost": 66600000.0,
        "projected_stockout_days": 12.7009,
        "forecast_confidence": 0.8947,
        "pd": 0.135815,
        "risk_band": "HIGH",
        "risk_score": 0.466059,
        "liquidity_score": 0.03876,
        "recommended_credit_limit": 15000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 66600000.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 10000000.0,
        "loan_amount": 15000000.0,
        "estimated_financing_cost": 495684.93,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FUNDING_SHORTFALL",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": false,
        "requires_human_approval": false,
        "policy_reasons": [
          "RISK_BAND_HIGH"
        ],
        "max_executable_amount": 0.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 10000000.0,
            "fee": 110000.0,
            "total_due": 10110000.0,
            "due_date": "2026-11-04",
            "tenor_days": 45
          },
          {
            "source": "bank_loan",
            "principal": 15000000.0,
            "fee": 385684.93,
            "total_due": 15385684.93,
            "due_date": "2026-11-04",
            "tenor_days": 45
          }
        ]
      },
      "forecast": {
        "seller_id": "shop_d_linhkien",
        "horizon_days": 30,
        "expected_sales": 615633214.29,
        "required_inventory_cost": 66600000.0,
        "projected_stockout_days": 12.7009,
        "confidence": 0.8947,
        "engine_version": "mock-forecast-v1",
        "sku_plan": [
          {
            "sku": "DM-RAM-16",
            "forecast_daily_units": 6.9482,
            "on_hand": 90,
            "lead_time_days": 14,
            "safety_stock_days": 3,
            "required_units": 119,
            "reorder_units": 29,
            "unit_cost": 1150000.0,
            "reorder_cost": 33350000.0,
            "days_of_cover": 12.953
          },
          {
            "sku": "DM-SSD-1T",
            "forecast_daily_units": 4.3304,
            "on_hand": 55,
            "lead_time_days": 14,
            "safety_stock_days": 3,
            "required_units": 74,
            "reorder_units": 19,
            "unit_cost": 1750000.0,
            "reorder_cost": 33250000.0,
            "days_of_cover": 12.701
          }
        ]
      },
      "risk": {
        "seller_id": "shop_d_linhkien",
        "pd": 0.135815,
        "liquidity_score": 0.03876,
        "risk_score": 0.466059,
        "recommended_limit": 15000000.0,
        "risk_band": "HIGH",
        "engine_version": "mock-risk-v1",
        "factors": {
          "liquidity_ratio": 0.116279,
          "liquidity_score": 0.03876,
          "sales_factor": 0.9,
          "leverage_ratio": 0.398148,
          "leverage_factor": 0.601852,
          "monthly_sales": 540000000.0,
          "bank_headroom": 15000000.0,
          "raw_limit_before_cap": 19397162.79
        }
      },
      "capital_plan": {
        "seller_id": "shop_d_linhkien",
        "total_need": 66600000.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 10000000.0,
        "loan_amount": 15000000.0,
        "estimated_financing_cost": 495684.93,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FUNDING_SHORTFALL",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "funding_capacity": 25000000.0,
        "shortfall": 41600000.0,
        "feasible": false,
        "cost_breakdown": {
          "cash": 0.0,
          "supplier_credit": 110000.0,
          "loan": 385684.93,
          "tenor_days": 45.0,
          "loan_cost_rate": 0.025712,
          "supplier_cost_rate": 0.011,
          "cash_capacity": 0.0,
          "supplier_capacity": 10000000.0,
          "loan_capacity": 15000000.0
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
          "DM-RAM-16: 15.0 days of cover is below the 17-day reorder point",
          "DM-SSD-1T: 13.8 days of cover is below the 14-day supplier lead time"
        ],
        "recommended_next_tool": "forecast_inventory_need"
      },
      "repayment_schedule": [
        {
          "source": "supplier_credit",
          "principal": 10000000.0,
          "fee": 110000.0,
          "total_due": 10110000.0,
          "due_date": "2026-11-04",
          "tenor_days": 45
        },
        {
          "source": "bank_loan",
          "principal": 15000000.0,
          "fee": 385684.93,
          "total_due": 15385684.93,
          "due_date": "2026-11-04",
          "tenor_days": 45
        }
      ],
      "seller_state_at_run": {
        "seller_id": "shop_d_linhkien",
        "display_name": "Linh Kiện Đức Minh",
        "cash_balance": 18000000.0,
        "available_bank_credit": 90000000.0,
        "current_inventory_value": 140000000.0,
        "avg_daily_sales": 18000000.0,
        "pending_marketplace_payout": 7000000.0,
        "supplier_payables": 140000000.0,
        "open_loan_balance": 75000000.0,
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
        "policy rejected the plan; stopping before proposal"
      ],
      "tool_calls": [
        {
          "tool_call_id": "tc_28694d83721749c6",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.408,
          "input_hash": "b3a6a6d62d8405c9da1d3d9c6cf137c7",
          "output_hash": "933174314bab5739bc6c38e00201cb46",
          "error_message": null,
          "input": {
            "seller_id": "shop_d_linhkien"
          },
          "output": {
            "seller_id": "shop_d_linhkien",
            "display_name": "Linh Kiện Đức Minh",
            "cash_balance": 18000000.0,
            "available_bank_credit": 90000000.0,
            "current_inventory_value": 140000000.0,
            "avg_daily_sales": 18000000.0,
            "pending_marketplace_payout": 7000000.0,
            "supplier_payables": 140000000.0,
            "open_loan_balance": 75000000.0,
            "currency": "VND",
            "expected_payout_date": "2026-09-23"
          },
          "created_at": "2026-09-21T13:22:48.598963"
        },
        {
          "tool_call_id": "tc_f52240ead16b4419",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 0.645,
          "input_hash": "b3a6a6d62d8405c9da1d3d9c6cf137c7",
          "output_hash": "29c74e517f99f2043879a632e885da1a",
          "error_message": null,
          "input": {
            "seller_id": "shop_d_linhkien"
          },
          "output": {
            "seller_id": "shop_d_linhkien",
            "reference_date": "2026-09-20",
            "items": [
              {
                "sku": "DM-RAM-16",
                "on_hand": 90,
                "avg_daily_units": 6.0,
                "unit_cost": 1150000.0,
                "supplier_lead_time_days": 14
              },
              {
                "sku": "DM-SSD-1T",
                "on_hand": 55,
                "avg_daily_units": 4.0,
                "unit_cost": 1750000.0,
                "supplier_lead_time_days": 14
              }
            ]
          },
          "created_at": "2026-09-21T13:22:48.600863"
        },
        {
          "tool_call_id": "tc_95fc030d0c3b40c0",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 2.207,
          "input_hash": "b3a6a6d62d8405c9da1d3d9c6cf137c7",
          "output_hash": "b6e6ae96a23f17bd3c5d5dbb43f4557a",
          "error_message": null,
          "input": {
            "seller_id": "shop_d_linhkien"
          },
          "output": {
            "seller_id": "shop_d_linhkien",
            "lookback_days": 30,
            "reference_date": "2026-09-20",
            "total_orders": 60,
            "total_units": 324,
            "gross_revenue": 589980000.0,
            "avg_daily_revenue": 19666000.0,
            "recent_7d_avg_daily_revenue": 21477142.86,
            "previous_7d_avg_daily_revenue": 20174285.71,
            "revenue_trend_pct": 6.46,
            "units_by_sku": {
              "DM-RAM-16": 199,
              "DM-SSD-1T": 125
            }
          },
          "created_at": "2026-09-21T13:22:48.604310"
        },
        {
          "tool_call_id": "tc_876351e1f26448d5",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.284,
          "input_hash": "b3a6a6d62d8405c9da1d3d9c6cf137c7",
          "output_hash": "3a2604d75b524f8a2067f5956d46af86",
          "error_message": null,
          "input": {
            "seller_id": "shop_d_linhkien"
          },
          "output": {
            "supplier_id": "ncc_d_01",
            "seller_id": "shop_d_linhkien",
            "credit_limit": 150000000.0,
            "credit_days": 45,
            "lead_time_days": 14,
            "fee_rate": 0.011
          },
          "created_at": "2026-09-21T13:22:48.606006"
        },
        {
          "tool_call_id": "tc_0b6e1ad4d38a4e68",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.737,
          "input_hash": "3db8015e14450f07f005aa186fe665ea",
          "output_hash": "bb9532c030e8decb2515efe028690efd",
          "error_message": null,
          "input": {
            "seller_id": "shop_d_linhkien",
            "horizon_days": 30
          },
          "output": {
            "seller_id": "shop_d_linhkien",
            "horizon_days": 30,
            "expected_sales": 615633214.29,
            "required_inventory_cost": 66600000.0,
            "projected_stockout_days": 12.7009,
            "confidence": 0.8947,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "DM-RAM-16",
                "forecast_daily_units": 6.9482,
                "on_hand": 90,
                "lead_time_days": 14,
                "safety_stock_days": 3,
                "required_units": 119,
                "reorder_units": 29,
                "unit_cost": 1150000.0,
                "reorder_cost": 33350000.0,
                "days_of_cover": 12.953
              },
              {
                "sku": "DM-SSD-1T",
                "forecast_daily_units": 4.3304,
                "on_hand": 55,
                "lead_time_days": 14,
                "safety_stock_days": 3,
                "required_units": 74,
                "reorder_units": 19,
                "unit_cost": 1750000.0,
                "reorder_cost": 33250000.0,
                "days_of_cover": 12.701
              }
            ]
          },
          "created_at": "2026-09-21T13:22:48.608947"
        },
        {
          "tool_call_id": "tc_45c060d8b09c4381",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.222,
          "input_hash": "b3a6a6d62d8405c9da1d3d9c6cf137c7",
          "output_hash": "8d606279700c8eb44351c71b7ae8e0aa",
          "error_message": null,
          "input": {
            "seller_id": "shop_d_linhkien"
          },
          "output": {
            "seller_id": "shop_d_linhkien",
            "pd": 0.135815,
            "liquidity_score": 0.03876,
            "risk_score": 0.466059,
            "recommended_limit": 15000000.0,
            "risk_band": "HIGH",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 0.116279,
              "liquidity_score": 0.03876,
              "sales_factor": 0.9,
              "leverage_ratio": 0.398148,
              "leverage_factor": 0.601852,
              "monthly_sales": 540000000.0,
              "bank_headroom": 15000000.0,
              "raw_limit_before_cap": 19397162.79
            }
          },
          "created_at": "2026-09-21T13:22:48.610833"
        },
        {
          "tool_call_id": "tc_5e82cac46cbc4dfd",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.426,
          "input_hash": "b3a6a6d62d8405c9da1d3d9c6cf137c7",
          "output_hash": "963335cfc6d4c665af2310735078e7e4",
          "error_message": null,
          "input": {
            "seller_id": "shop_d_linhkien"
          },
          "output": {
            "seller_id": "shop_d_linhkien",
            "total_need": 66600000.0,
            "cash_amount": 0.0,
            "supplier_credit_amount": 10000000.0,
            "loan_amount": 15000000.0,
            "estimated_financing_cost": 495684.93,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "SUPPLIER_CREDIT_USED",
              "BANK_LOAN_USED",
              "FUNDING_SHORTFALL",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 25000000.0,
            "shortfall": 41600000.0,
            "feasible": false,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 110000.0,
              "loan": 385684.93,
              "tenor_days": 45.0,
              "loan_cost_rate": 0.025712,
              "supplier_cost_rate": 0.011,
              "cash_capacity": 0.0,
              "supplier_capacity": 10000000.0,
              "loan_capacity": 15000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "created_at": "2026-09-21T13:22:48.612545"
        },
        {
          "tool_call_id": "tc_2811002d26bb4ed4",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.224,
          "input_hash": "b3a6a6d62d8405c9da1d3d9c6cf137c7",
          "output_hash": "f488ae94f1abeaa83816c5d296c5d3e7",
          "error_message": null,
          "input": {
            "seller_id": "shop_d_linhkien"
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
          "created_at": "2026-09-21T13:22:48.615939"
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
          "latency_ms": 0.408,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:48.599314"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 0.645,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:48.601246"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 2.207,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:48.604789"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.284,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:48.606544"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.737,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:48.609636"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.222,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:48.611184"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.426,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:48.612897"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.224,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:22:48.616274"
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
          "created_at": "2026-09-21T13:22:52.147971"
        }
      ],
      "action": null,
      "execution": null
    },
    "wf_03ef9140cee94ca1": {
      "workflow_id": "wf_03ef9140cee94ca1",
      "seller_id": "shop_a_thoitrang",
      "display_name": "Thời Trang Anh Thư",
      "status": "PROPOSAL_CREATED",
      "orchestrator": "deterministic",
      "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?",
      "parent_workflow_id": null,
      "created_at": "2026-09-21T13:21:52.738940",
      "updated_at": "2026-09-21T13:22:48.569511",
      "facts": {
        "currency": "VND",
        "cash_balance": 85000000.0,
        "pending_marketplace_payout": 40000000.0,
        "open_loan_balance": 0.0,
        "supplier_payables": 12000000.0,
        "horizon_days": 30,
        "expected_sales": 435021964.29,
        "required_inventory_cost": 36260000.0,
        "projected_stockout_days": 3.0183,
        "forecast_confidence": 0.9124,
        "pd": 0.02915,
        "risk_band": "LOW",
        "risk_score": 0.901429,
        "liquidity_score": 1.0,
        "recommended_credit_limit": 150000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 36260000.0,
        "cash_amount": 36260000.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": true,
        "requires_human_approval": false,
        "policy_reasons": [
          "WITHIN_LIMITS"
        ],
        "max_executable_amount": 36260000.0
      },
      "forecast": {
        "seller_id": "shop_a_thoitrang",
        "horizon_days": 30,
        "expected_sales": 435021964.29,
        "required_inventory_cost": 36260000.0,
        "projected_stockout_days": 3.0183,
        "confidence": 0.9124,
        "engine_version": "mock-forecast-v1",
        "sku_plan": [
          {
            "sku": "AT-DAM-01",
            "forecast_daily_units": 19.8786,
            "on_hand": 60,
            "lead_time_days": 5,
            "safety_stock_days": 3,
            "required_units": 160,
            "reorder_units": 100,
            "unit_cost": 185000.0,
            "reorder_cost": 18500000.0,
            "days_of_cover": 3.0183
          },
          {
            "sku": "AT-AOSM-02",
            "forecast_daily_units": 15.4375,
            "on_hand": 50,
            "lead_time_days": 5,
            "safety_stock_days": 3,
            "required_units": 124,
            "reorder_units": 74,
            "unit_cost": 240000.0,
            "reorder_cost": 17760000.0,
            "days_of_cover": 3.2389
          }
        ]
      },
      "risk": {
        "seller_id": "shop_a_thoitrang",
        "pd": 0.02915,
        "liquidity_score": 1.0,
        "risk_score": 0.901429,
        "recommended_limit": 150000000.0,
        "risk_band": "LOW",
        "engine_version": "mock-risk-v1",
        "factors": {
          "liquidity_ratio": 10.416667,
          "liquidity_score": 1.0,
          "sales_factor": 0.7,
          "leverage_ratio": 0.028571,
          "leverage_factor": 0.971429,
          "monthly_sales": 420000000.0,
          "bank_headroom": 150000000.0,
          "raw_limit_before_cap": 169190000.0
        }
      },
      "capital_plan": {
        "seller_id": "shop_a_thoitrang",
        "total_need": 36260000.0,
        "cash_amount": 36260000.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "funding_capacity": 253000000.0,
        "shortfall": 0.0,
        "feasible": true,
        "cost_breakdown": {
          "cash": 0.0,
          "supplier_credit": 0.0,
          "loan": 0.0,
          "tenor_days": 30.0,
          "loan_cost_rate": 0.009205,
          "supplier_cost_rate": 0.005,
          "cash_capacity": 55000000.0,
          "supplier_capacity": 48000000.0,
          "loan_capacity": 150000000.0
        },
        "engine_version": "greedy-optimizer-v1"
      },
      "policy_decision": {
        "approved": true,
        "requires_human_approval": false,
        "reasons": [
          "WITHIN_LIMITS"
        ],
        "max_executable_amount": 36260000.0,
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
          "AT-DAM-01: 3.2 days of cover is below the 5-day supplier lead time",
          "AT-AOSM-02: 3.3 days of cover is below the 5-day supplier lead time"
        ],
        "recommended_next_tool": "forecast_inventory_need"
      },
      "repayment_schedule": [],
      "seller_state_at_run": {
        "seller_id": "shop_a_thoitrang",
        "display_name": "Thời Trang Anh Thư",
        "cash_balance": 85000000.0,
        "available_bank_credit": 150000000.0,
        "current_inventory_value": 70000000.0,
        "avg_daily_sales": 14000000.0,
        "pending_marketplace_payout": 40000000.0,
        "supplier_payables": 12000000.0,
        "open_loan_balance": 0.0,
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
          "tool_call_id": "tc_4c51337cc81e40f2",
          "tool_name": "get_seller_state",
          "agent": "orchestrator",
          "step": 1,
          "success": true,
          "latency_ms": 0.761,
          "input_hash": "c8bb84d5fc9652cbaaf960414f8acccd",
          "output_hash": "d23b87cf130e0cb8948fd76078463b40",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang"
          },
          "output": {
            "seller_id": "shop_a_thoitrang",
            "display_name": "Thời Trang Anh Thư",
            "cash_balance": 85000000.0,
            "available_bank_credit": 150000000.0,
            "current_inventory_value": 70000000.0,
            "avg_daily_sales": 14000000.0,
            "pending_marketplace_payout": 40000000.0,
            "supplier_payables": 12000000.0,
            "open_loan_balance": 0.0,
            "currency": "VND",
            "expected_payout_date": "2026-09-25"
          },
          "created_at": "2026-09-21T13:21:52.740065"
        },
        {
          "tool_call_id": "tc_920897f85cb34def",
          "tool_name": "get_inventory_snapshot",
          "agent": "orchestrator",
          "step": 2,
          "success": true,
          "latency_ms": 1.081,
          "input_hash": "c8bb84d5fc9652cbaaf960414f8acccd",
          "output_hash": "f41708f40a6fc5e85d6e5ae0474389b3",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang"
          },
          "output": {
            "seller_id": "shop_a_thoitrang",
            "reference_date": "2026-09-20",
            "items": [
              {
                "sku": "AT-DAM-01",
                "on_hand": 60,
                "avg_daily_units": 19.0,
                "unit_cost": 185000.0,
                "supplier_lead_time_days": 5
              },
              {
                "sku": "AT-AOSM-02",
                "on_hand": 50,
                "avg_daily_units": 15.0,
                "unit_cost": 240000.0,
                "supplier_lead_time_days": 5
              }
            ]
          },
          "created_at": "2026-09-21T13:21:52.744935"
        },
        {
          "tool_call_id": "tc_51829cdbd0cf436f",
          "tool_name": "get_marketplace_metrics",
          "agent": "orchestrator",
          "step": 3,
          "success": true,
          "latency_ms": 2.789,
          "input_hash": "c8bb84d5fc9652cbaaf960414f8acccd",
          "output_hash": "2acbe8424f2b68f54d5f7a2a22ba2657",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang"
          },
          "output": {
            "seller_id": "shop_a_thoitrang",
            "lookback_days": 30,
            "reference_date": "2026-09-20",
            "total_orders": 60,
            "total_units": 1049,
            "gross_revenue": 430750000.0,
            "avg_daily_revenue": 14358333.33,
            "recent_7d_avg_daily_revenue": 14562857.14,
            "previous_7d_avg_daily_revenue": 14631428.57,
            "revenue_trend_pct": -0.47,
            "units_by_sku": {
              "AT-AOSM-02": 459,
              "AT-DAM-01": 590
            }
          },
          "created_at": "2026-09-21T13:21:52.749037"
        },
        {
          "tool_call_id": "tc_f29dd4d9951c4546",
          "tool_name": "get_supplier_terms",
          "agent": "orchestrator",
          "step": 4,
          "success": true,
          "latency_ms": 0.42,
          "input_hash": "c8bb84d5fc9652cbaaf960414f8acccd",
          "output_hash": "1e4162c205617a6a33289a955a91259f",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang"
          },
          "output": {
            "supplier_id": "ncc_a_01",
            "seller_id": "shop_a_thoitrang",
            "credit_limit": 60000000.0,
            "credit_days": 30,
            "lead_time_days": 5,
            "fee_rate": 0.005
          },
          "created_at": "2026-09-21T13:21:52.751181"
        },
        {
          "tool_call_id": "tc_4a8c15610066437e",
          "tool_name": "forecast_inventory_need",
          "agent": "orchestrator",
          "step": 5,
          "success": true,
          "latency_ms": 0.478,
          "input_hash": "ee0030a2f85d1e8cd2580760691e1c11",
          "output_hash": "8a57500f1ca4359c0e1062cafc2dc33b",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang",
            "horizon_days": 30
          },
          "output": {
            "seller_id": "shop_a_thoitrang",
            "horizon_days": 30,
            "expected_sales": 435021964.29,
            "required_inventory_cost": 36260000.0,
            "projected_stockout_days": 3.0183,
            "confidence": 0.9124,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "AT-DAM-01",
                "forecast_daily_units": 19.8786,
                "on_hand": 60,
                "lead_time_days": 5,
                "safety_stock_days": 3,
                "required_units": 160,
                "reorder_units": 100,
                "unit_cost": 185000.0,
                "reorder_cost": 18500000.0,
                "days_of_cover": 3.0183
              },
              {
                "sku": "AT-AOSM-02",
                "forecast_daily_units": 15.4375,
                "on_hand": 50,
                "lead_time_days": 5,
                "safety_stock_days": 3,
                "required_units": 124,
                "reorder_units": 74,
                "unit_cost": 240000.0,
                "reorder_cost": 17760000.0,
                "days_of_cover": 3.2389
              }
            ]
          },
          "created_at": "2026-09-21T13:21:52.752888"
        },
        {
          "tool_call_id": "tc_56b8bfd41b1047e4",
          "tool_name": "calculate_risk",
          "agent": "orchestrator",
          "step": 6,
          "success": true,
          "latency_ms": 0.353,
          "input_hash": "c8bb84d5fc9652cbaaf960414f8acccd",
          "output_hash": "91a7f729de218123845eb167012a4d4e",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang"
          },
          "output": {
            "seller_id": "shop_a_thoitrang",
            "pd": 0.02915,
            "liquidity_score": 1.0,
            "risk_score": 0.901429,
            "recommended_limit": 150000000.0,
            "risk_band": "LOW",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 10.416667,
              "liquidity_score": 1.0,
              "sales_factor": 0.7,
              "leverage_ratio": 0.028571,
              "leverage_factor": 0.971429,
              "monthly_sales": 420000000.0,
              "bank_headroom": 150000000.0,
              "raw_limit_before_cap": 169190000.0
            }
          },
          "created_at": "2026-09-21T13:21:52.754461"
        },
        {
          "tool_call_id": "tc_bf436ca617804c89",
          "tool_name": "optimize_capital_plan",
          "agent": "orchestrator",
          "step": 7,
          "success": true,
          "latency_ms": 0.406,
          "input_hash": "c8bb84d5fc9652cbaaf960414f8acccd",
          "output_hash": "304cd80edf980d48d9d770ea9528911c",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang"
          },
          "output": {
            "seller_id": "shop_a_thoitrang",
            "total_need": 36260000.0,
            "cash_amount": 36260000.0,
            "supplier_credit_amount": 0.0,
            "loan_amount": 0.0,
            "estimated_financing_cost": 0.0,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 253000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 0.0,
              "loan": 0.0,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.009205,
              "supplier_cost_rate": 0.005,
              "cash_capacity": 55000000.0,
              "supplier_capacity": 48000000.0,
              "loan_capacity": 150000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "created_at": "2026-09-21T13:21:52.756156"
        },
        {
          "tool_call_id": "tc_d690deb52df34bee",
          "tool_name": "evaluate_policy",
          "agent": "orchestrator",
          "step": 8,
          "success": true,
          "latency_ms": 0.346,
          "input_hash": "c8bb84d5fc9652cbaaf960414f8acccd",
          "output_hash": "22872df29dd0c7f1f33f44b82ea39cb8",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang"
          },
          "output": {
            "approved": true,
            "requires_human_approval": false,
            "reasons": [
              "WITHIN_LIMITS"
            ],
            "max_executable_amount": 36260000.0,
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
          "created_at": "2026-09-21T13:21:52.757821"
        },
        {
          "tool_call_id": "tc_c4f41736bc0e4e03",
          "tool_name": "create_action_proposal",
          "agent": "orchestrator",
          "step": 9,
          "success": true,
          "latency_ms": 1.609,
          "input_hash": "c8bb84d5fc9652cbaaf960414f8acccd",
          "output_hash": "77577e34e08084754cb27cf2c1c35d13",
          "error_message": null,
          "input": {
            "seller_id": "shop_a_thoitrang"
          },
          "output": {
            "action_id": "act_624fe049d17e4a16",
            "seller_id": "shop_a_thoitrang",
            "action_type": "FINANCING",
            "amount": 36260000.0,
            "status": "PROPOSED",
            "requires_human_approval": false,
            "expires_at": "2026-09-21T13:51:52.759399",
            "created_at": "2026-09-21T13:21:52.760320",
            "executed": false,
            "provider_reference": null
          },
          "created_at": "2026-09-21T13:21:52.760825"
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
          "latency_ms": 0.761,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.741017"
        },
        {
          "agent": "orchestrator",
          "step": 2,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_inventory_snapshot",
          "status": "OK",
          "latency_ms": 1.081,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.745312"
        },
        {
          "agent": "orchestrator",
          "step": 3,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_marketplace_metrics",
          "status": "OK",
          "latency_ms": 2.789,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.749560"
        },
        {
          "agent": "orchestrator",
          "step": 4,
          "model": null,
          "prompt_version": null,
          "tool_name": "get_supplier_terms",
          "status": "OK",
          "latency_ms": 0.42,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.751561"
        },
        {
          "agent": "orchestrator",
          "step": 5,
          "model": null,
          "prompt_version": null,
          "tool_name": "forecast_inventory_need",
          "status": "OK",
          "latency_ms": 0.478,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.753249"
        },
        {
          "agent": "orchestrator",
          "step": 6,
          "model": null,
          "prompt_version": null,
          "tool_name": "calculate_risk",
          "status": "OK",
          "latency_ms": 0.353,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.754799"
        },
        {
          "agent": "orchestrator",
          "step": 7,
          "model": null,
          "prompt_version": null,
          "tool_name": "optimize_capital_plan",
          "status": "OK",
          "latency_ms": 0.406,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.756534"
        },
        {
          "agent": "orchestrator",
          "step": 8,
          "model": null,
          "prompt_version": null,
          "tool_name": "evaluate_policy",
          "status": "OK",
          "latency_ms": 0.346,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.758172"
        },
        {
          "agent": "orchestrator",
          "step": 9,
          "model": null,
          "prompt_version": null,
          "tool_name": "create_action_proposal",
          "status": "OK",
          "latency_ms": 1.609,
          "error": null,
          "detail": {
            "attempts": 1
          },
          "created_at": "2026-09-21T13:21:52.761128"
        },
        {
          "agent": "workflow",
          "step": 0,
          "model": null,
          "prompt_version": "deterministic-sequence-v1",
          "tool_name": null,
          "status": "PROPOSAL_CREATED",
          "latency_ms": 0.0,
          "error": null,
          "detail": {
            "action_id": "act_624fe049d17e4a16",
            "explanation_source": "gemini",
            "tool_calls": 9,
            "degraded": false
          },
          "created_at": "2026-09-21T13:22:48.569917"
        }
      ],
      "action": {
        "action_id": "act_624fe049d17e4a16",
        "workflow_id": "wf_03ef9140cee94ca1",
        "seller_id": "shop_a_thoitrang",
        "action_type": "FINANCING",
        "amount": 36260000.0,
        "status": "PROPOSED",
        "policy_decision": {
          "approved": true,
          "requires_human_approval": false,
          "reasons": [
            "WITHIN_LIMITS"
          ],
          "max_executable_amount": 36260000.0,
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
            "seller_id": "shop_a_thoitrang",
            "total_need": 36260000.0,
            "cash_amount": 36260000.0,
            "supplier_credit_amount": 0.0,
            "loan_amount": 0.0,
            "estimated_financing_cost": 0.0,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "funding_capacity": 253000000.0,
            "shortfall": 0.0,
            "feasible": true,
            "cost_breakdown": {
              "cash": 0.0,
              "supplier_credit": 0.0,
              "loan": 0.0,
              "tenor_days": 30.0,
              "loan_cost_rate": 0.009205,
              "supplier_cost_rate": 0.005,
              "cash_capacity": 55000000.0,
              "supplier_capacity": 48000000.0,
              "loan_capacity": 150000000.0
            },
            "engine_version": "greedy-optimizer-v1"
          },
          "forecast": {
            "seller_id": "shop_a_thoitrang",
            "horizon_days": 30,
            "expected_sales": 435021964.29,
            "required_inventory_cost": 36260000.0,
            "projected_stockout_days": 3.0183,
            "confidence": 0.9124,
            "engine_version": "mock-forecast-v1",
            "sku_plan": [
              {
                "sku": "AT-DAM-01",
                "forecast_daily_units": 19.8786,
                "on_hand": 60,
                "lead_time_days": 5,
                "safety_stock_days": 3,
                "required_units": 160,
                "reorder_units": 100,
                "unit_cost": 185000.0,
                "reorder_cost": 18500000.0,
                "days_of_cover": 3.0183
              },
              {
                "sku": "AT-AOSM-02",
                "forecast_daily_units": 15.4375,
                "on_hand": 50,
                "lead_time_days": 5,
                "safety_stock_days": 3,
                "required_units": 124,
                "reorder_units": 74,
                "unit_cost": 240000.0,
                "reorder_cost": 17760000.0,
                "days_of_cover": 3.2389
              }
            ]
          },
          "risk": {
            "seller_id": "shop_a_thoitrang",
            "pd": 0.02915,
            "liquidity_score": 1.0,
            "risk_score": 0.901429,
            "recommended_limit": 150000000.0,
            "risk_band": "LOW",
            "engine_version": "mock-risk-v1",
            "factors": {
              "liquidity_ratio": 10.416667,
              "liquidity_score": 1.0,
              "sales_factor": 0.7,
              "leverage_ratio": 0.028571,
              "leverage_factor": 0.971429,
              "monthly_sales": 420000000.0,
              "bank_headroom": 150000000.0,
              "raw_limit_before_cap": 169190000.0
            }
          },
          "supplier_terms": {
            "supplier_id": "ncc_a_01",
            "seller_id": "shop_a_thoitrang",
            "credit_limit": 60000000.0,
            "credit_days": 30,
            "lead_time_days": 5,
            "fee_rate": 0.005
          },
          "repayment_schedule": [],
          "facts": {
            "currency": "VND",
            "cash_balance": 85000000.0,
            "pending_marketplace_payout": 40000000.0,
            "open_loan_balance": 0.0,
            "supplier_payables": 12000000.0,
            "horizon_days": 30,
            "expected_sales": 435021964.29,
            "required_inventory_cost": 36260000.0,
            "projected_stockout_days": 3.0183,
            "forecast_confidence": 0.9124,
            "pd": 0.02915,
            "risk_band": "LOW",
            "risk_score": 0.901429,
            "liquidity_score": 1.0,
            "recommended_credit_limit": 150000000.0,
            "risk_engine_version": "mock-risk-v1",
            "capital_need": 36260000.0,
            "cash_amount": 36260000.0,
            "supplier_credit_amount": 0.0,
            "loan_amount": 0.0,
            "estimated_financing_cost": 0.0,
            "funding_date": "2026-09-20",
            "rationale_codes": [
              "CASH_USED_ABOVE_MIN_RESERVE",
              "FULLY_FUNDED",
              "SUPPLIER_LINE_PARTIALLY_UTILISED",
              "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
            ],
            "policy_approved": true,
            "requires_human_approval": false,
            "policy_reasons": [
              "WITHIN_LIMITS"
            ],
            "max_executable_amount": 36260000.0
          },
          "user_message": "30 ngày tới tôi có thiếu vốn nhập hàng không?"
        },
        "created_at": "2026-09-21T13:21:52.760320",
        "approved_by": null,
        "approved_at": null,
        "rejected_by": null,
        "rejected_at": null,
        "executed_at": null,
        "expires_at": "2026-09-21T13:51:52.759399"
      },
      "execution": null
    }
  },
  "replies": {
    "shop_a_thoitrang": {
      "workflow_id": "wf_03ef9140cee94ca1",
      "seller_id": "shop_a_thoitrang",
      "status": "PROPOSAL_CREATED",
      "facts": {
        "currency": "VND",
        "cash_balance": 85000000.0,
        "pending_marketplace_payout": 40000000.0,
        "open_loan_balance": 0.0,
        "supplier_payables": 12000000.0,
        "horizon_days": 30,
        "expected_sales": 435021964.29,
        "required_inventory_cost": 36260000.0,
        "projected_stockout_days": 3.0183,
        "forecast_confidence": 0.9124,
        "pd": 0.02915,
        "risk_band": "LOW",
        "risk_score": 0.901429,
        "liquidity_score": 1.0,
        "recommended_credit_limit": 150000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 36260000.0,
        "cash_amount": 36260000.0,
        "supplier_credit_amount": 0.0,
        "loan_amount": 0.0,
        "estimated_financing_cost": 0.0,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": true,
        "requires_human_approval": false,
        "policy_reasons": [
          "WITHIN_LIMITS"
        ],
        "max_executable_amount": 36260000.0
      },
      "explanation": "Chào bạn, dựa trên dữ liệu phân tích cho 30 ngày tới, tình hình kinh doanh của cửa hàng như sau:\n\nHiện tại, bạn chỉ còn đủ hàng để bán trong 3.0183 ngày, trong khi tổng nhu cầu vốn lưu động để nhập hàng là 36.260.000 VND. Mặc dù có nguy cơ hết hàng sớm, nhưng kế hoạch tài chính đã được thiết lập để đảm bảo hoạt động của bạn.\n\nCụ thể, toàn bộ 36.260.000 VND cần thiết sẽ được tài trợ bằng phần tài trợ bằng tiền mặt là 36.260.000 VND. Bạn không cần sử dụng đến vay ngân hàng hay tín dụng nhà cung cấp, do đó chi phí tài chính ước tính là 0.0 VND.\n\nVề rủi ro, nhóm rủi ro của bạn hiện ở mức LOW với xác suất vỡ nợ là 0.02915. Hệ thống đã cấp hạn mức tín dụng khuyên nghị là 150.000.000 VND và số tiền tối đa được thực thi là 36.260.000 VND. Chính sách đã được chấp thuận vì nằm trong giới hạn cho phép, nên bạn không cần thực hiện thêm thao tác phê duyệt nào.\n\nKế hoạch này ưu tiên sử dụng nguồn tiền mặt sẵn có để tối ưu hóa chi phí vận hành.",
      "explanation_source": "gemini",
      "action_id": "act_624fe049d17e4a16",
      "requires_user_action": false,
      "trace_summary": [
        "[1] get_seller_state: cash=85,000,000 VND",
        "[2] get_inventory_snapshot: 2 SKU(s)",
        "[3] get_marketplace_metrics: 7d trend -0.5%",
        "[4] get_supplier_terms: limit=60,000,000, 30d @ 0.500%",
        "[5] forecast_inventory_need: need=36,260,000",
        "[6] calculate_risk: pd=0.0291 band=LOW limit=150,000,000",
        "[7] optimize_capital_plan: cash=36,260,000 supplier=0 loan=0",
        "[8] evaluate_policy: approved=True human=False (WITHIN_LIMITS)",
        "[9] create_action_proposal: act_624fe049d17e4a16 status=PROPOSED",
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
    "shop_d_linhkien": {
      "workflow_id": "wf_28cff625554244a4",
      "seller_id": "shop_d_linhkien",
      "status": "POLICY_REJECTED",
      "facts": {
        "currency": "VND",
        "cash_balance": 18000000.0,
        "pending_marketplace_payout": 7000000.0,
        "open_loan_balance": 75000000.0,
        "supplier_payables": 140000000.0,
        "horizon_days": 30,
        "expected_sales": 615633214.29,
        "required_inventory_cost": 66600000.0,
        "projected_stockout_days": 12.7009,
        "forecast_confidence": 0.8947,
        "pd": 0.135815,
        "risk_band": "HIGH",
        "risk_score": 0.466059,
        "liquidity_score": 0.03876,
        "recommended_credit_limit": 15000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 66600000.0,
        "cash_amount": 0.0,
        "supplier_credit_amount": 10000000.0,
        "loan_amount": 15000000.0,
        "estimated_financing_cost": 495684.93,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FUNDING_SHORTFALL",
          "SUPPLIER_LINE_PARTIALLY_UTILISED",
          "URGENT_STOCKOUT_BEFORE_LEAD_TIME"
        ],
        "policy_approved": false,
        "requires_human_approval": false,
        "policy_reasons": [
          "RISK_BAND_HIGH"
        ],
        "max_executable_amount": 0.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 10000000.0,
            "fee": 110000.0,
            "total_due": 10110000.0,
            "due_date": "2026-11-04",
            "tenor_days": 45
          },
          {
            "source": "bank_loan",
            "principal": 15000000.0,
            "fee": 385684.93,
            "total_due": 15385684.93,
            "due_date": "2026-11-04",
            "tenor_days": 45
          }
        ]
      },
      "explanation": "Trong 30 ngày tới, cửa hàng của bạn đang đối mặt với tình trạng thiếu hụt vốn lưu động để nhập hàng. Tổng nhu cầu vốn lưu động là 66.600.000 VND, trong khi số ngày còn đủ hàng để bán chỉ là 12.7009 ngày, dẫn đến nguy cơ hết hàng trước khi kịp nhập lô mới.\n\nKế hoạch tài chính được đề xuất bao gồm: sử dụng 10.000.000 VND từ tín dụng nhà cung cấp và 15.000.000 VND từ vay ngân hàng để bù đắp một phần nhu cầu. Phần tài trợ bằng tiền mặt hiện là 0.0 VND. Chi phí tài chính ước tính cho phương án này là 495.685 VND.\n\nTuy nhiên, đánh giá rủi ro cho thấy nhóm rủi ro của bạn là HIGH với xác suất vỡ nợ là 0.135815. Do đó, chính sách hiện tại không được chấp thuận (Policy chap thuan: False) vì lý do nhóm rủi ro cao. Hạn mức tín dụng khuyến nghị chỉ là 15.000.000 VND và số tiền tối đa được thực thi hiện là 0.0 VND. Bạn chưa thể thực hiện kế hoạch này ngay lúc này.\n\nKế hoạch này dựa trên giả định về doanh thu dự kiến trong kỳ là 615.633.214 VND với độ tin cậy dự báo là 0.8947.",
      "explanation_source": "gemini",
      "action_id": null,
      "requires_user_action": false,
      "trace_summary": [
        "[1] get_seller_state: cash=18,000,000 VND",
        "[2] get_inventory_snapshot: 2 SKU(s)",
        "[3] get_marketplace_metrics: 7d trend +6.5%",
        "[4] get_supplier_terms: limit=150,000,000, 45d @ 1.100%",
        "[5] forecast_inventory_need: need=66,600,000",
        "[6] calculate_risk: pd=0.1358 band=HIGH limit=15,000,000",
        "[7] optimize_capital_plan: cash=0 supplier=10,000,000 loan=15,000,000",
        "[8] evaluate_policy: approved=False human=False (RISK_BAND_HIGH)",
        "opportunity: WORKING_CAPITAL_GAP (urgency HIGH)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "policy rejected the plan; stopping before proposal"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 5,
        "violations": []
      }
    },
    "shop_b_mympham": {
      "workflow_id": "wf_9289739c49f143e1",
      "seller_id": "shop_b_mympham",
      "status": "WAITING_APPROVAL",
      "facts": {
        "currency": "VND",
        "cash_balance": 52000000.0,
        "pending_marketplace_payout": 35000000.0,
        "open_loan_balance": 15000000.0,
        "supplier_payables": 28000000.0,
        "horizon_days": 30,
        "expected_sales": 854745000.0,
        "required_inventory_cost": 85540000.0,
        "projected_stockout_days": 7.7651,
        "forecast_confidence": 0.8722,
        "pd": 0.040959,
        "risk_band": "MEDIUM",
        "risk_score": 0.853229,
        "liquidity_score": 0.674419,
        "recommended_credit_limit": 185000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 85540000.0,
        "cash_amount": 22000000.0,
        "supplier_credit_amount": 52000000.0,
        "loan_amount": 11540000.0,
        "estimated_financing_cost": 453641.64,
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
        "max_executable_amount": 85540000.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 52000000.0,
            "fee": 312000.0,
            "total_due": 52312000.0,
            "due_date": "2026-10-20",
            "tenor_days": 30
          },
          {
            "source": "bank_loan",
            "principal": 11540000.0,
            "fee": 141641.64,
            "total_due": 11681641.64,
            "due_date": "2026-10-20",
            "tenor_days": 30
          }
        ]
      },
      "explanation": "Chào bạn, dựa trên dữ liệu hiện tại, cửa hàng của bạn đang đối mặt với tình trạng thiếu hụt hàng hóa trong 7.7651 ngày tới, trong khi dự báo nhu cầu trong 30 ngày tới là 854.745.000 VND. Tổng nhu cầu vốn lưu động để nhập hàng là 85.540.000 VND.\n\nĐể đảm bảo hoạt động, kế hoạch tài chính đã được thiết lập như sau: bạn sẽ sử dụng 22.000.000 VND tiền mặt, 52.000.000 VND từ tín dụng nhà cung cấp và 11.540.000 VND từ vay ngân hàng. Thứ tự này được ưu tiên để tối ưu hóa dòng tiền và tận dụng hạn mức tín dụng hiện có.\n\nĐánh giá rủi ro của bạn thuộc nhóm MEDIUM với xác suất vỡ nợ là 0.040959. Hệ thống đã thiết lập hạn mức tín dụng khuyến nghị là 185.000.000 VND.\n\nHiện tại, chính sách đã được chấp thuận với số tiền tối đa được thực thi là 85.540.000 VND. Tuy nhiên, vì lý do nhóm rủi ro trung bình và số tiền vượt ngưỡng phê duyệt, bạn cần thực hiện bước phê duyệt cuối cùng để hoàn tất kế hoạch.\n\nLưu ý rằng kế hoạch này dựa trên độ tin cậy dự báo là 0.8722 và có thể thay đổi nếu doanh thu thực tế biến động.",
      "explanation_source": "gemini",
      "action_id": "act_4a33f2ff28cf4d8c",
      "requires_user_action": true,
      "trace_summary": [
        "[1] get_seller_state: cash=52,000,000 VND",
        "[2] get_inventory_snapshot: 2 SKU(s)",
        "[3] get_marketplace_metrics: 7d trend +11.5%",
        "[4] get_supplier_terms: limit=80,000,000, 30d @ 0.600%",
        "[5] forecast_inventory_need: need=85,540,000",
        "[6] calculate_risk: pd=0.0410 band=MEDIUM limit=185,000,000",
        "[7] optimize_capital_plan: cash=22,000,000 supplier=52,000,000 loan=11,540,000",
        "[8] evaluate_policy: approved=True human=True (WITHIN_LIMITS, AMOUNT_ABOVE_HUMAN_APPROVAL_THRESHOLD, RISK_BAND_MEDIUM_REQUIRES_REVIEW)",
        "[9] create_action_proposal: act_4a33f2ff28cf4d8c status=AWAITING_APPROVAL",
        "opportunity: WORKING_CAPITAL_GAP (urgency HIGH)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: create_action_proposal -> ok"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 7,
        "violations": []
      }
    },
    "shop_c_taphoa": {
      "workflow_id": "wf_e95c33fa39994f3a",
      "seller_id": "shop_c_taphoa",
      "status": "WAITING_APPROVAL",
      "facts": {
        "currency": "VND",
        "cash_balance": 38000000.0,
        "pending_marketplace_payout": 35000000.0,
        "open_loan_balance": 12000000.0,
        "supplier_payables": 40000000.0,
        "horizon_days": 30,
        "expected_sales": 732904553.57,
        "required_inventory_cost": 38115000.0,
        "projected_stockout_days": 4.4737,
        "forecast_confidence": 0.8994,
        "pd": 0.063511,
        "risk_band": "MEDIUM",
        "risk_score": 0.761179,
        "liquidity_score": 0.467949,
        "recommended_credit_limit": 108000000.0,
        "risk_engine_version": "mock-risk-v1",
        "capital_need": 38115000.0,
        "cash_amount": 8000000.0,
        "supplier_credit_amount": 5000000.0,
        "loan_amount": 25115000.0,
        "estimated_financing_cost": 419660.75,
        "funding_date": "2026-09-20",
        "rationale_codes": [
          "CASH_USED_ABOVE_MIN_RESERVE",
          "SUPPLIER_CREDIT_USED",
          "BANK_LOAN_USED",
          "FULLY_FUNDED",
          "SUPPLIER_LINE_PARTIALLY_UTILISED"
        ],
        "policy_approved": true,
        "requires_human_approval": true,
        "policy_reasons": [
          "WITHIN_LIMITS",
          "RISK_BAND_MEDIUM_REQUIRES_REVIEW"
        ],
        "max_executable_amount": 38115000.0,
        "repayment_schedule": [
          {
            "source": "supplier_credit",
            "principal": 5000000.0,
            "fee": 45000.0,
            "total_due": 5045000.0,
            "due_date": "2026-10-11",
            "tenor_days": 21
          },
          {
            "source": "bank_loan",
            "principal": 25115000.0,
            "fee": 374660.75,
            "total_due": 25489660.75,
            "due_date": "2026-10-20",
            "tenor_days": 30
          }
        ]
      },
      "explanation": "Chào bạn, trong 30 ngày tới, cửa hàng của bạn dự kiến sẽ thiếu hụt vốn để nhập hàng với tổng nhu cầu vốn lưu động là 38.115.000 VND. Hiện tại, số ngày còn đủ hàng để bán của bạn là 4.4737 ngày, vì vậy việc bổ sung hàng hóa là rất cần thiết để duy trì doanh thu dự kiến trong kỳ là 732.904.554 VND.\n\nKế hoạch tài chính đã được thiết lập để đáp ứng đầy đủ nhu cầu này thông qua việc kết hợp các nguồn lực: 8.000.000 VND từ tiền mặt, 5.000.000 VND từ tín dụng nhà cung cấp và 25.115.000 VND từ vay ngân hàng. Thứ tự ưu tiên này giúp tối ưu hóa dòng tiền hiện có.\n\nĐánh giá rủi ro xếp bạn vào nhóm rủi ro MEDIUM với xác suất vỡ nợ là 0.063511. Dựa trên điểm sức khỏe tài chính 0.761179, hệ thống đã đưa ra hạn mức tín dụng khuyến nghị là 108.000.000 VND.\n\nHiện tại, chính sách đã được chấp thuận (Policy chap thuan: True), nhưng bạn cần thực hiện bước phê duyệt cuối cùng để giải ngân vào ngày 2026-09-20. Kế hoạch này dựa trên giả định về độ tin cậy dự báo là 0.8994 và sự cân bằng giữa chi phí tài chính và nhu cầu hàng hóa.",
      "explanation_source": "gemini",
      "action_id": "act_4013457b7cc44c92",
      "requires_user_action": true,
      "trace_summary": [
        "[1] get_seller_state: cash=38,000,000 VND",
        "[2] get_inventory_snapshot: 3 SKU(s)",
        "[3] get_marketplace_metrics: 7d trend +10.1%",
        "[4] get_supplier_terms: limit=45,000,000, 21d @ 0.900%",
        "[5] forecast_inventory_need: need=38,115,000",
        "[6] calculate_risk: pd=0.0635 band=MEDIUM limit=108,000,000",
        "[7] optimize_capital_plan: cash=8,000,000 supplier=5,000,000 loan=25,115,000",
        "[8] evaluate_policy: approved=True human=True (WITHIN_LIMITS, RISK_BAND_MEDIUM_REQUIRES_REVIEW)",
        "[9] create_action_proposal: act_4013457b7cc44c92 status=AWAITING_APPROVAL",
        "opportunity: STOCKOUT_RISK (urgency LOW)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: create_action_proposal -> ok"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 6,
        "violations": []
      }
    },
    "seller_demo_001": {
      "workflow_id": "wf_e255ea46d47f4200",
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
      "explanation": "Chào bạn, dựa trên dữ liệu hiện tại, cửa hàng đang đối mặt với tình trạng thiếu hụt hàng hóa nghiêm trọng khi số ngày còn đủ hàng để bán chỉ là 3.125 ngày. Để đảm bảo doanh thu dự kiến trong kỳ là 893.565.000 VND, bạn cần nhập thêm hàng với tổng nhu cầu vốn lưu động là 137.120.000 VND.\n\nKế hoạch tài chính đã được lập để đáp ứng nhu cầu này bao gồm: sử dụng 30.000.000 VND tiền mặt, tận dụng 25.000.000 VND từ tín dụng nhà cung cấp và vay ngân hàng 82.120.000 VND. Việc ưu tiên sử dụng tiền mặt và tín dụng nhà cung cấp trước giúp tối ưu hóa chi phí tài chính ước tính là 934.951 VND.\n\nĐánh giá rủi ro của bạn đang ở nhóm MEDIUM với xác suất vỡ nợ là 0.047512. Hạn mức tín dụng khuyến nghị là 130.000.000 VND. Vì số tiền tối đa được thực thi là 137.120.000 VND vượt ngưỡng phê duyệt thủ công, chính sách yêu cầu bạn phải thực hiện phê duyệt để hoàn tất.\n\nLưu ý rằng kế hoạch này dựa trên độ tin cậy dự báo là 0.791, vì vậy việc theo dõi sát sao doanh thu thực tế là rất quan trọng.",
      "explanation_source": "gemini",
      "action_id": "act_cc721481978f435c",
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
        "[9] create_action_proposal: act_cc721481978f435c status=AWAITING_APPROVAL",
        "opportunity: WORKING_CAPITAL_GAP (urgency HIGH)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: create_action_proposal -> ok"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 7,
        "violations": []
      }
    },
    "seller_demo_002": {
      "workflow_id": "wf_ab7c004d0e534c26",
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
      "explanation": "Chào bạn, dựa trên các dữ liệu tài chính hiện tại cho kỳ 30 ngày tới, tình hình kinh doanh của cửa hàng đang rất ổn định.\n\nHiện tại, tổng nhu cầu vốn lưu động của bạn là 0.0 VND, vì giá trị hàng cần nhập là 0.0 VND. Do đó, kế hoạch tài chính không yêu cầu huy động thêm nguồn lực: phần tài trợ bằng tiền mặt là 0.0 VND, phần tài trợ bằng tín dụng nhà cung cấp là 0.0 VND và phần tài trợ bằng vay ngân hàng là 0.0 VND. Với số dư tiền mặt hiện có là 400.000.000 VND và doanh thu dự kiến trong kỳ là 1.518.000.000 VND, bạn hoàn toàn không thiếu vốn để nhập hàng.\n\nĐánh giá rủi ro cho thấy nhóm rủi ro của bạn là LOW với xác suất vỡ nợ (PD) là 0.005817. Hệ thống đã thiết lập hạn mức tín dụng khuyến nghị là 300.000.000 VND. Vì chính sách đã được chấp thuận (True) với lý do NO_FUNDING_REQUIRED, bạn không cần thực hiện thêm thao tác phê duyệt nào.\n\nLưu ý rằng kết quả này dựa trên độ tin cậy dự báo là 0.817, phản ánh sự cân bằng giữa nhu cầu hàng hóa và khả năng thanh khoản hiện tại của cửa hàng.",
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
        "amounts_checked": 3,
        "violations": []
      }
    },
    "seller_demo_003": {
      "workflow_id": "wf_24da030f648f4d48",
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
      "explanation": "Chào bạn, dựa trên các dữ liệu hiện tại, tình hình kinh doanh của cửa hàng trong 30 ngày tới đang gặp khó khăn. Bạn hiện chỉ còn đủ hàng để bán trong 3.6111 ngày, trong khi giá trị hàng cần nhập là 15.860.000 VND. Tổng nhu cầu vốn lưu động của bạn cũng là 15.860.000 VND.\n\nVề kế hoạch tài chính, hiện tại hệ thống ghi nhận phần tài trợ bằng tiền mặt là 0.0 VND, tài trợ bằng tín dụng nhà cung cấp là 0.0 VND và vay ngân hàng là 0.0 VND. Doanh thu dự kiến trong kỳ là 90.720.000 VND.\n\nĐánh giá rủi ro cho thấy nhóm rủi ro của bạn là HIGH với xác suất vỡ nợ (PD) là 0.233969. Vì lý do này, hạn mức tín dụng khuyến nghị là 0.0 VND và chính sách hiện tại không được chấp thuận do nằm trong nhóm rủi ro cao. Số tiền tối đa được thực thi là 0.0 VND. Hiện tại, bạn không cần thực hiện thêm thao tác phê duyệt nào vì hệ thống đã tự động từ chối dựa trên các chỉ số rủi ro.\n\nLưu ý rằng kế hoạch này dựa trên độ tin cậy dự báo là 0.8162 và các ràng buộc về thanh khoản hiện tại.",
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
      "workflow_id": "wf_3a2010710eab4053",
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
      "explanation": "Chào bạn, dựa trên dữ liệu hiện tại, cửa hàng đang đối mặt với tình trạng thiếu hụt hàng hóa nghiêm trọng khi số ngày còn đủ hàng để bán chỉ là 3.5714 ngày. Để đảm bảo hoạt động trong 30 ngày tới, tổng nhu cầu vốn lưu động là 257.850.000 VND.\n\nKế hoạch tài chính được đề xuất như sau: bạn sẽ sử dụng 90.000.000 VND tiền mặt, kết hợp với 80.000.000 VND từ tín dụng nhà cung cấp và 87.850.000 VND từ vay ngân hàng để đáp ứng đủ giá trị hàng cần nhập là 257.850.000 VND. Thứ tự này được ưu tiên để tối ưu hóa dòng tiền hiện có trước khi sử dụng các nguồn vay.\n\nĐánh giá rủi ro cho thấy cửa hàng thuộc nhóm rủi ro LOW với xác suất vỡ nợ là 0.02586 và hạn mức tín dụng khuyến nghị là 220.000.000 VND. Hiện tại, chính sách đã được chấp thuận với số tiền tối đa được thực thi là 257.850.000 VND. Bạn cần thực hiện bước phê duyệt cuối cùng để hoàn tất kế hoạch này.\n\nLưu ý rằng kế hoạch này dựa trên độ tin cậy dự báo là 0.8749, đòi hỏi sự cân nhắc kỹ lưỡng về biến động doanh thu thực tế.",
      "explanation_source": "gemini",
      "action_id": "act_0ba3e945960544bc",
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
        "[9] create_action_proposal: act_0ba3e945960544bc status=AWAITING_APPROVAL",
        "opportunity: WORKING_CAPITAL_GAP (urgency HIGH)",
        "step 7: optimize_capital_plan -> ok",
        "step 8: evaluate_policy -> ok",
        "step 9: create_action_proposal -> ok"
      ],
      "validation": {
        "valid": true,
        "amounts_checked": 7,
        "violations": []
      }
    }
  }
};

  return {
    /* seller console */
    projects: DATA.projects,
    conversations: DATA.conversations,     /* by project_id */
    messages: DATA.messages,               /* by conversation_id */
    applications: DATA.applications,
    onboardingSchema: DATA.onboardingSchema,
    previewFor: DATA.previewFor,

    /* admin board */
    portfolio: DATA.portfolio,
    adminSellers: DATA.adminSellers,
    sellerProfiles: DATA.sellerProfiles,   /* by seller_id */
    sellers: DATA.sellers,
    stats: DATA.stats,
    workflows: DATA.workflows,

    workflowDetail: function (id) {
      return DATA.details[id] || null;
    },

    /** A canned reply for the seller chat, echoing the question asked. */
    replyFor: function (sellerId, text) {
      var base = DATA.replies[sellerId] || DATA.replies[Object.keys(DATA.replies)[0]];
      var copy = JSON.parse(JSON.stringify(base));
      copy.user_message = text;
      return copy;
    }
  };
})();
