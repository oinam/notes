# SpreadSheet

> A SpreadSheet is a computer application for organization, analysis and storage of data in tabular form. __If you want to start a business, run it first in a SpreadSheet.__

## Tit-Bits

#### Format in Indian Currency (Lakhs, Crores)

₹ with decimals \
`[$₹][>9999999]##\,##\,##\,##0.00;[$₹][>99999]##\,##\,##0.00;[$₹]##,##0.00`

₹ without decimals \
`[$₹][>9999999]##\,##\,##\,##0;[$₹][>99999]##\,##\,##0;[$₹]##,##0`

No ₹, with decimals \
`[>9999999]##\,##\,##\,##0.00;[>99999]##\,##\,##0.00;##,##0.00`

No ₹, without decimals \
`[>9999999]##\,##\,##\,##0;[>99999]##\,##\,##0;##,##0`


#### Year(s), Month(s), and Day(s) between dates

```
=IF(DATEDIF(A1, B1, "D")>365, QUOTIENT(DATEDIF(A1, B1, "D"), 365)&" year(s) "&
                          QUOTIENT(MOD(DATEDIF(A1, B1, "D"), 365), 30)&" month(s) "&
                      MOD(QUOTIENT(MOD(DATEDIF(A1, B1, "D"), 365), 30), 30)&" day(s)",
 IF(DATEDIF(A1, B1, "D")>30,  QUOTIENT(DATEDIF(A1, B1, "D"), 30)&" month(s) "&
                                   MOD(DATEDIF(A1, B1, "D"), 30)&" day(s)", 
                                       DATEDIF(A1, B1, "D")&" day(s)"))
```

### References

- [Google Sheets Functions](https://support.google.com/docs/table/25273)
