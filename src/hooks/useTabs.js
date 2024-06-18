import { useState } from 'react';

// ----------------------------------------------------------------------

export default function useTabs(defaultValues) {
  const [currentTab, setCurrentTab] = useState(defaultValues || '');

  function onChangeTab(event, newValue) {
    console.log('NEW VALUE: ', newValue)
    setCurrentTab(newValue);
  }

  return {
    currentTab,
    onChangeTab,
    setCurrentTab,
  };
}
