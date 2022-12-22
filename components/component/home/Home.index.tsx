import { FC } from "react";
import { Index } from ".";
import { IDBInvoices } from "../../../type/type";
import { LayOutPage } from "../../layout/pagelayout/LayOutPage.component";

export const HomeIndex: FC<IDBInvoices> = ({ invoices }) => {
  return (
    <LayOutPage>
      <Index invoices={invoices} />
    </LayOutPage>
  );
};

