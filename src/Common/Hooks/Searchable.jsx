export const useSearch = (searchVal, datas, searchableValues) => {
  let result = [];

  function getEachItem(autocomplete) {
    if (searchVal && searchableValues.length) {
      datas.forEach((item) => {
        searchItem(item);
      });
      let uniqueResults = [...new Set(result)];
      return uniqueResults;
    } else if (autocomplete) {
      return [];
    } else {
      return datas;
    }
  }

  function searchItem(item) {
    Object.keys(item).forEach((key) => {
      if (typeof item[key] === "object") {
        searchItem(item[key]);
      }
      if (typeof item[key] === "string" && searchableValues.includes(key)) {
        let searchAsRegEx = new RegExp(searchVal, "gi");
        if (item[key].toString().match(searchAsRegEx)) {
          result.push(item);
        }
      }
    });
  }

  return { filteredData: (autocomplete) => getEachItem(autocomplete) };
};
