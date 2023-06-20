// import * as articles from "./articles";
import * as articles from './articles'

const types = [articles.types];
const queries = [];
const mutations = [];

const entities = [articles];

export const typeDefs = `${types.join("\n")}`;
