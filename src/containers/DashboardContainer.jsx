import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from 'components/ui/card';
import Charts from 'components/ui/charts';
import { DatePickerWithRange } from 'components/ui/DatePicker';
import { Button } from 'components/ui/button';

const cardData = [
  {
    title: 'Total lead',
    amount: '1,100',
    value: '20.1%',
    change: 'from last month',
  },
  {
    title: 'Walk-Ins',
    amount: '343',
    value: '77',
    change: 'Since last month',
  },
  {
    title: 'Conversion',
    amount: '200',
    value: '18%',
    change: 'from last month',
  },
  {
    title: 'Projects',
    amount: '2,346',
    value: '10%',
    change: 'Since last month',
  },
  {
    title: 'Channel Partner',
    amount: '230',
    value: '77',
    change: 'Since last month',
  },
];

const leadsCardData = [
  {
    id: 1,
    primaryText: 'Olivia Martin',
    secondaryText: 'L38174891374914914',
  },
  {
    id: 2,
    primaryText: 'Jackson Lee',
    secondaryText: 'L38174891374914914',
  },
  {
    id: 3,
    primaryText: 'William Kim',
    secondaryText: 'L38174891374914914',
  },
  {
    id: 4,
    primaryText: 'Sofia Davis',
    secondaryText: 'L38174891374914914',
  },
  {
    id: 5,
    primaryText: 'Isabella Nguyen',
    secondaryText: 'L38174891374914914',
  },
];

const leads = '2,650';

const data = [
  {
    name: 'Page A',
    Conversion: 4000,
    Lead: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    Conversion: 3000,
    Lead: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    Conversion: 2000,
    Lead: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    Conversion: 2780,
    Lead: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    Conversion: 1890,
    Lead: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    Conversion: 2390,
    Lead: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    Conversion: 3490,
    Lead: 4300,
    amt: 2100,
  },
];

const getInitials = (text) => {
  const words = text.split(' ');
  if (words.length >= 2) {
    const firstNameInitial = words[0].charAt(0).toUpperCase();
    const lastNameInitial = words[1].charAt(0).toUpperCase();
    return `${firstNameInitial}${lastNameInitial}`;
  } else if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  } else {
    return '';
  }
};

const DashboardContainer = () => {
  return (
    <>
      <div className="mx-8 my-8">
        <div className="text-2xl font-bold text-black-700">Overview</div>
        <div className="flex items-center space-x-2 mt-7 ">
          <DatePickerWithRange />
          <Button className="ml-3 bg-[#850C70] text-white hover:bg-[#850C70] font-bold py-2 px-6 rounded">
            Apply
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 mt-7">
          {cardData.map((card, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-bold">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.amount}</div>
                <p className="font-normal text-sm text-gray-400">
                  <span style={{ color: '#26A95F' }}>+{card.value}</span>{' '}
                  {card.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-5 mt-3">
            <div className="text-base font-bold text-black-700 ml-6 mt-3">
              Leads vs Conversion
            </div>
            <div style={{ marginTop: '10rem' }}>
              <Charts data={data} />
            </div>
            <div className="flex  justify-between">
              <div className="text-gray-400 ml-2">13 June</div>
              <div className="text-gray-400 mr-2">14 July</div>
            </div>
          </Card>
          <Card className="col-span-2 mt-3">
            <div className="text-lg font-bold text-black-700 ml-6 mt-4">
              Recent Leads
            </div>
            <div className="ml-6 text-gray-400">
              <span
                style={{ color: '#26A95F' }}
                className="font-normal text-sm"
              >
                +{leads}
              </span>{' '}
              leads this month.
            </div>
            <div style={{ maxHeight: '450px', overflow: 'auto' }}>
              {leadsCardData.map((card) => (
                <CardHeader key={card.id}>
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500">
                      {getInitials(card.primaryText)}
                    </div>
                    <div className="ml-4">
                      <CardTitle className="text-lg text-black-500">
                        {card.primaryText}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-400">
                        {card.secondaryText}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default DashboardContainer;
