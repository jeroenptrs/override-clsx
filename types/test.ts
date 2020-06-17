// Minimum Typescript Version: 3.9.5
import clsx, { createOverride } from "override-clsx";

type MyClasses = "ship" | "aTest";

/*
 * DESCRIBE: default type
 */
// $ExpectType OverrideClsx<string>
createOverride();

// $ExpectError
createOverride<undefined>()("ship");

// $ExpectType string
createOverride()("ship", "aTest");

// $ExpectType string
createOverride()(0);

// $ExpectType string
createOverride()(2);

// $ExpectType string
createOverride()(2 && "ship");

// $ExpectType string
createOverride()(undefined);

// $ExpectType string
createOverride()(null);

// $ExpectType string
createOverride()(["ship", "ship"]);

// $ExpectType string
createOverride()(true);

// $ExpectType string
createOverride()(false);

// $ExpectType string
createOverride()({ ship: true, aTest: false });

// $ExpectType string
clsx();

/*
 * DESCRIBE: reusable override
 */

// $ExpectType OverrideClsx<MyClasses>
const test1 = createOverride<MyClasses>();

// $ExpectError
test1("test");

// $ExpectType string
test1("ship", "aTest");

// $ExpectType string
test1(0);

// $ExpectType string
test1(2);

// $ExpectType string
test1(2 && "ship");

// $ExpectType string
test1(undefined);

// $ExpectType string
test1(null);

// $ExpectType string
test1(["ship", "ship"]);

// $ExpectType string
test1(true);

// $ExpectType string
test1(false);

// $ExpectType string
test1({ ship: true, aTest: false });

/*
 * DESCRIBE: ad-hoc override
 */
// $ExpectError
clsx<MyClasses>("test");

// $ExpectType string
clsx<MyClasses>("ship", "aTest");

// $ExpectType string
clsx<MyClasses>(0);

// $ExpectType string
clsx<MyClasses>(2);

// $ExpectType string
clsx<MyClasses>(2 && "ship");

// $ExpectType string
clsx<MyClasses>(undefined);

// $ExpectType string
clsx<MyClasses>(null);

// $ExpectType string
clsx<MyClasses>(["ship", "ship"]);

// $ExpectType string
clsx<MyClasses>(true);

// $ExpectType string
clsx<MyClasses>(false);

// $ExpectType string
clsx<MyClasses>({ ship: true, aTest: false });
