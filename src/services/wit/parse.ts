import { request } from "http"
import { get } from "https"
import { InputType } from "../../constants/enums"
import Errors from "../../constants/errors"
import newEnglandRevolutionGames from "../../constants/football_api_responses/new_england_revolution_games"
import newEnglandRevolutionPlayers from "../../constants/football_api_responses/new_england_revolution_players"
import IWitResponse from "./i_wit_response"

interface IParsedWitResponse {
    inputType: InputType,
    correct?: boolean,
    value: string
}

function parseWitCall(response: IWitResponse): IParsedWitResponse {
    throw Error(Errors.notYetImplemented)
}


export default parseWitCall