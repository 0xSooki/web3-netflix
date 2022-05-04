import { FirstInputPolyfillEntry, NavigationTimingPolyfillEntry } from 'web-vitals';

const reportWebVitals = (onPerfEntry? : ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

interface ReportHandler {
  (metric: Metric): void;
}

interface Metric {
  // The name of the metric (in acronym form).
  name: 'CLS' | 'FCP' | 'FID' | 'LCP' | 'TTFB';
 
  // The current value of the metric.
  value: number;
 
  // The delta between the current value and the last-reported value.
  // On the first report, `delta` and `value` will always be the same.
  delta: number;
 
  // A unique ID representing this particular metric instance. This ID can
  // be used by an analytics tool to dedupe multiple values sent for the same
  // metric instance, or to group multiple deltas together and calculate a
  // total. It can also be used to differentiate multiple different metric
  // instances sent from the same page, which can happen if the page is
  // restored from the back/forward cache (in that case new metrics object
  // get created).
  id: string;
 
  // Any performance entries used in the metric value calculation.
  // Note, entries will be added to the array as the value changes.
  entries: (PerformanceEntry | FirstInputPolyfillEntry | NavigationTimingPolyfillEntry)[];
}

export default reportWebVitals;
