import { isEmpty } from "lodash"
import { checkExpiration } from './datetime/dateTimeHelper'
/**
 * Check whether a token is valid or not
 */
export const isValidToken = (token) => {
    const { accessToken, expiresAt } = token;
    // False if the access token is empty
    if (isEmpty(accessToken) || isEmpty(expiresAt)) return false;
    return checkExpiration(expiresAt);
}
/**
 * check whether the invitation token is correct or not 
 * @param {*} invitationToken 
 * @returns 
 */
export const isValidInvitationToken = (invitationToken) => {
    if (isEmpty(invitationToken)) return false
    // check whether the invitation token 
    // match with the patterm or not
    return invitationToken.match('[A-Za-z0-9]{8}');

}

export const isValidApplicationToken = (appToken) => {
    if (isEmpty(appToken)) return false;

    return /^$|^[a-zA-Z0-9]{42}$/.test(appToken);
}
