import jwt_decode from 'jwt-decode';

function isTokenValid(jwtToken) {
    const decodedToken = jwt_decode(jwtToken);
    const expiration = decodedToken.exp;

    const now = new Date().getTime();
    const nowInUnix = Math.round(now / 1000);

   return expiration - nowInUnix > 0;
}

export default isTokenValid;