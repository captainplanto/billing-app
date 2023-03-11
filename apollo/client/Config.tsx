import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ReactiveVar,
  makeVar,
} from "@apollo/client";
import {
  IInvoiceCard,
  IInvoiceForm,
} from "../../type/type";

export interface IInvoiceProps {
  invoices: IInvoiceCard[];
  invoiceDetails: IInvoiceForm | undefined;
  errorStatus: boolean;
  invoiceStatus: string;
  itemEntryLists: boolean;
}
const invoiceInitialState: IInvoiceProps = {
  invoices: [],
  invoiceDetails: undefined,
  invoiceStatus: "pending",
  errorStatus: true,
  itemEntryLists: false,
};
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        invoice: {
          read() {
            return invoiceVar();
          },
        },
      },
    },
  },
});
export const client = new ApolloClient({
  cache: cache,
  link: new HttpLink({ uri: "http://localhost:3000/api/graphql" }),
  credentials: "true",
  connectToDevTools: true,
});

export const invoiceVar: ReactiveVar<IInvoiceProps> =
  makeVar<IInvoiceProps>(invoiceInitialState);