(* Example of a Factorial module *)

let rec <%= pkgSlugName %> x =

    match n with
    | 0 -> 1
    | _ -> n * (<%= pkgSlugName %> (n-1))

;;
