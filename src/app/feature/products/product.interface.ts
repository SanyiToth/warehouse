interface WareHouseData {


}

export interface Product extends WareHouseData {
  id?: number;
  name: string;
  width: number;
  length: number;
  date: string;
}
