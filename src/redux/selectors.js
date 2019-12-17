export const getTermsState = store => store.terms;

export const getAllHistory = store =>{
  
 return  getTermsState(store) ? getTermsState(store).allIds : [];

}

export const getTermById = (store, id) =>{

 return  getTermsState(store) ? { ...getTermsState(store).byIds[id], id } : {};
}

export const getTerms = store =>{
  
  return getTermsState(store);

}
