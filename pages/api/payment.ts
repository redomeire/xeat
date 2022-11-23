// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name?: string,
    resp: any
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // const midtransClient = require('midtrans-client');
    // // Create Core API instance
    // let core = new midtransClient.CoreApi({
    //     isProduction: false,
    //     serverKey: process.env.NEXT_PUBLIC_MIDTRANS_SERVER_KEY,
    //     clientKey: process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY
    // });

    // let parameter = {
    //     "payment_type": "gopay",
    //     "transaction_details": {
    //         "gross_amount": 2000,
    //         "order_id": "test-transaction-54321",
    //     },
    //     "gopay": {
    //         "enable_callback": true,                // optional
    //         "callback_url": "someapps://callback"   // optional
    //     }
    // };

    // core.charge(parameter)
    //     .then((chargeResponse: any) => {
    //         console.log('chargeResponse:');
    //         console.log(chargeResponse);
    //     })
}
