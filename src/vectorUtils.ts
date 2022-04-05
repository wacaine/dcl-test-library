
/**
 * 
 * @param vec1 
 * @param normal 
 * @returns 
 */
export function reflectVec3(vec1: Vector3, normal: Vector3): Vector3 {
    //  r = a - 2<a, n> n
    let dot = 2 * Vector3.Dot(vec1, normal)
    let reflected = vec1.subtract(normal.multiplyByFloats(dot, dot, dot))

    return reflected
}

/**
 * faster to calculate than actual {@link distance} (optimization by how much? not sure)  
 * @param pos1 
 * @param pos2 
 * @returns 
 */
export function distanceSquared(pos1: Vector3, pos2: Vector3): number {
    const a = pos1.x - pos2.x
    const b = pos1.z - pos2.z
    return a * a + b * b
}

export function distance(pos1: Vector3, pos2: Vector3): number {
    const a = pos1.x - pos2.x
    const b = pos1.z - pos2.z
    return Math.sqrt(a * a + b * b)
}


export function getProjectedPointOnLineFast(pos: Vector3, v1: Vector3, v2: Vector3): Vector3 {
    // get dot product of e1, e2
    let e1 = new Vector2(v2.x - v1.x, v2.z - v1.z)
    let e2 = new Vector2(pos.x - v1.x, pos.z - v1.z)
    let valDp = Vector2.Dot(e1, e2)

    // get squared length of e1
    let len2 = e1.x * e1.x + e1.y * e1.y
    let result = new Vector3((v1.x + (valDp * e1.x) / len2), 0, (v1.z + (valDp * e1.y) / len2))

    return result;
}

export function isPointOnSegment(point: Vector3, segA: Vector3, segB: Vector3): boolean {

    let minX = Math.min(segA.x, segB.x)
    let minZ = Math.min(segA.z, segB.z)
    let maxX = Math.max(segA.x, segB.x)
    let maxZ = Math.max(segA.z, segB.z)


    if (segA.x == segB.x && segA.z == segB.z) {
        return false
    }

    if (point.x >= minX && point.x <= maxX && point.z >= minZ && point.z <= maxZ) {
        return true
    } else {
        return false
    }

}