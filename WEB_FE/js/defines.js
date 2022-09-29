/**
 * @file defines.js
 * @author Sinduy
 * @brief define constants and tables
 */

const Lank = {
    NONE :  0, // 
    P_1  :  1, // 이병
    P_2  :  2, // 일병
    P_3  :  3, // 상병
    P_4  :  4, // 병장
    PO_1 :  5, // 하사
    PO_2 :  6, // 중사
    PO_3 :  7, // 상사
    PO_4 :  8, // 원사
    WO_1 :  9, // 준위
    CO_1 : 10, // 소위
    CO_2 : 11, // 중위
    CO_3 : 12, // 대위
    FO_1 : 13, // 소령
    FO_2 : 14, // 중령
    FO_3 : 15, // 대령
    GO_1 : 16, // 준장
    GO_2 : 17, // 소장
    GO_3 : 18, // 중장
    GO_4 : 19, // 대장
};

const Status = {
    NONE :     0, // 
    VACATION : 1, // 휴가
    WORK :     2, // 근무
    MISC :     3, // 기타
}

const Lank_table = [
    "",     // NONE
    "이병", // P_1
    "일병", // P_2
    "상병", // P_3
    "병장", // P_4
    "하사", // PO_1
    "중사", // PO_2
    "상사", // PO_3
    "원사", // PO_4
    "준위", // WO_1
    "소위", // CO_1
    "중위", // CO_2
    "대위", // CO_3
    "소령", // FO_1
    "중령", // FO_2
    "대령", // FO_3
    "준장", // GO_1
    "소장", // GO_2
    "중장", // GO_3
    "대장", // GO_4
]

const Status_table = [
    "",     // NONE
    "휴가", // VACATION
    "근무", // WORK
    "기타", // MISC
]
