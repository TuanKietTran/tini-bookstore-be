import query from "../api/mysql.connector";
import Bill from "../models/bill";
import { BillQueries } from "../models/bill.queries";


export class Include {
  public b_id: string;
  public p_id: string;
  public amount: number;

  constructor(bid: string, pid: string, amount: number) {
    this.b_id = bid;
    this.p_id = pid;
    this.amount = amount;
  }
};

function toArray(bill: Bill) {
  return [bill.b_id, bill.B_time, bill.City, bill.District, bill.StreetNum, bill.B_Status, bill.Phone, bill.Email, bill.Customer_name, bill.Payment_method]
}

export const postBill = async (bill: Bill) => {
  await query(BillQueries.addBill, toArray(bill));
}

export const addCart = async (item: Include) => {
  await query(BillQueries.addEach, [item.b_id, item.p_id, item.amount]);
}