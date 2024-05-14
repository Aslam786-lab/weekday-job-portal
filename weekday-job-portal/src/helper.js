export default function getFilteredJd(filters, jdList) {
    return jdList.filter(jd => {
      if (filters.experience.length > 0 && jd.minExp > parseInt(filters.experience[0])) {
        return false;
      }
      
      if (filters.minimumbasepaysalary.length > 0 && jd.minJdSalary < parseFloat(filters.minimumbasepaysalary[0])) {
        return false;
      }
      
      if (filters.remote.length > 0) {
        if(filters.remote.some(location => jd.location.toLowerCase() === 'remote' && location.toLowerCase() === 'remote')){
          return true;
        } else if(filters.remote.some(location => jd.location.toLowerCase() !== 'remote' && location.toLowerCase() !== 'remote')){
          return true;
        } else {
          return false;
        }
      }
      
      if (filters.roles.length > 0 &&  !filters.roles.some(role => jd.jobRole.toLowerCase() === role.toLowerCase())) {
        return false;
      }

      if(filters.searchcompanyname.length > 0 && !jd.companyName.toLowerCase().includes(filters.searchcompanyname.toLowerCase())) {
        return false;
      }
      
      return true;
    });
  }
  