import React from 'react';
import { Widget } from '../components';
import { CodeHighlight } from './CodeHighlight';

/**
 * This is an example of how to use the React TanStack Widget in a consumer application
 */
export const Example: React.FC = () => {
    const exampleCode = `import React from 'react';
import { Widget } from 'react-tanstack-widget';

export const AnalyticsWidget = () => {
  // Track widget data with TanStack Query
  const [analyticsData, setAnalyticsData] = React.useState({
    customerId: 'cust-1234',
    metrics: {
      views: 2547,
      conversions: 132,
      revenue: '$12,590'
    }
  });

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Performance Analytics</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
        <Widget 
          instanceId="analytics-widget" 
          initialData={analyticsData}
          theme={{
            primaryColor: '#ff6b6b',
            secondaryColor: '#4ecdc4',
            fontFamily: 'Inter, sans-serif'
          }}
        />
      </div>
      
      <div className="mt-4 text-sm text-gray-500 flex items-center">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Dados atualizados automaticamente a cada 5 minutos
      </div>
    </div>
  );
};`;

    return (
        <div className="space-y-12 w-full">
            <section>
                <h2 className="text-xl font-bold mb-4 text-gray-800">Basic Widget Implementation</h2>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                    <Widget
                        instanceId="widget-demo-1"
                    />
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-4 text-gray-800">Custom Theme Example</h2>
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                    <Widget
                        instanceId="widget-demo-2"
                        theme={{
                            primaryColor: '#ff6b6b',
                            secondaryColor: '#4ecdc4',
                            fontFamily: 'Roboto, sans-serif'
                        }}
                        initialData={{
                            customerId: '12345',
                            preferences: {
                                language: 'en-US',
                                currency: 'USD'
                            }
                        }}
                    />
                </div>
            </section>

            <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Usage Code Example</h2>
                <div className="bg-gray-900 rounded-md overflow-hidden">
                    <CodeHighlight
                        code={exampleCode}
                        language="tsx"
                        theme="github-dark"
                    />
                </div>
                <div className="mt-4 text-sm text-gray-600">
                    Exemplo utilizando Tailwind CSS e React com TanStack Widget
                </div>
            </section>
        </div>
    );
};