(* Generated by generator-ocaml, a Yeoman generator to scaffold OCaml modules. *)

(* CHANGE LINES BELOW ACORDING TO YOUR PROJECT *)

(* Example of a Factorial module *)
let rec <%= pkgSlugName %> n =

    match n with
    | 0 -> 1
    | _ -> n * (<%= pkgSlugName %> (n-1))

;;
