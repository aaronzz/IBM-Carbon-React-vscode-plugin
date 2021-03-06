export interface AST {
    type: string,
    start: number,
    end: number,
    parent: AST,
    body?: AST[],
    expression?: AST,
    openingElement?: AST,
    attributes?: AST[],
    name?: any,
    value?: AST,
    children?: AST[],
    ancestors?: AST[]
}

export interface Entity {
    target: 'tagName' | 'attributeName' | 'attributeValue' | 'children',
    parent: Entity,
    value: string
}

export interface CarbonModel {
    [key: string]: Model
}

export interface Model {
    description: string,
    displayName: string,
    props?: {
        [key: string]: PropsModel
    }
}

export interface PropsModel {
    defaultValue?: {
        computed: boolean
        value: string
    },
    description?: string,
    required: boolean,
    type?: {
        name?: string,
        value?: any,
        raw?: string,
        computed?: boolean
    }
}