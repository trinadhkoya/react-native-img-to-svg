import Plate2Ico from "./assets/plate2Ico";
import React from "react";
import LogoutIco from "./assets/logOutIco";
import ShoppinCartIco from "./assets/shoppingCart";
import SupportIco from "./assets/supportIco";
import BookingIco from "./assets/bookingIco";
import OrdersIco from "./assets/ordersIco";
import ZcardIco from "./assets/zCardIco";
import GiftCardIco2 from "./assets/giftCardIco2";

const profileData = {
    data: [
        {
            name: 'Restaurant Deals',
            description: '',
            iconData: <Plate2Ico width={24} height={24}
                                 fill={'#eb3a42'} strokeWidth={2} viewBox={'0 0 43.97 43.98'}
                                 lightColor={'#f48990'}/>
        },
        {
            name: 'Gift Card Deals',
            description: '',
            iconData: <GiftCardIco2 width={24} height={24}
                                    fill={'#eb3a42'} strokeWidth={2} viewBox={'0 0 53.69 40.81'}
                                    lightColor={'#f48990'}/>
        },
        {
            name: 'Manage Zaggle Card',
            description: 'Search, members, collections',
            iconData: <ZcardIco width={24} height={24}
                                fill={'#eb3a42'} strokeWidth={2} viewBox={'0 0 56.39 42.01'}
                                lightColor={'#f48990'}/>
        },
        {
            name: 'Cart',
            description: '',
            iconData: <ShoppinCartIco width={24} height={24}
                                      fill={'#eb3a42'} strokeWidth={2} viewBox={'0 0 59.17 43.39'}
                                      lightColor={'#f48990'}/>
        },
        {
            name: 'My Orders',
            description: '',
            iconData: <OrdersIco width={24} height={24}
                                 fill={'#eb3a42'} strokeWidth={2} viewBox={'0 0 41.54 42.01'}
                                 lightColor={'#f48990'}/>
        },
        {
            name: 'My Bookings',
            description: '',
            iconData: <BookingIco width={24} height={24}
                                  fill={'#eb3a42'} strokeWidth={2} viewBox={'0 0 41.54 44.18'}
                                  lightColor={'#f48990'}/>
        }, {
            name: 'Customer Support',
            description: '',
            iconData: <SupportIco width={24} height={24}
                                  fill={'#eb3a42'} strokeWidth={2} viewBox={'0 0 43.97 45.4'}
                                  lightColor={'#f48990'}/>
        },
        {
            name: 'Logout',
            description: '',
            iconData: <LogoutIco width={24} height={24}
                                 fill={'#eb3a42'} strokeWidth={2} viewBox={'0 0 39 49.1'}
                                 lightColor={'#f48990'}/>
        }
    ]
}

export default profileData