// 완전한 URI
const uri = 'http://example.com?name=이정현&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩한다.
const encoding = encodeURI(uri);
console.log(encoding);
// http://example.com?name=%EC%9D%B4%EC%A0%95%ED%98%84&job=programmer&teacher

// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩한다.
const decoding = decodeURI(encoding);
console.log(decoding);
// http://example.com?name=이정현&job=programmer&teacher